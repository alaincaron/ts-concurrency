import {
  ArrayDeque,
  ArrayStack,
  buildCollection,
  Container,
  PriorityQueue,
  PriorityQueueOptions,
  Queue,
  QueueOptions,
  UnderflowException,
  WithCapacity,
} from 'ts-data-collections';

import { ConsumerPromiseResolver, ProducerPromiseResolver } from '../helpers/types';

export abstract class BlockingQueue<E> extends Container {
  // non-blocking: throws
  abstract add(item: E): void;
  abstract remove(): E;
  element(): E {
    if (this.isEmpty()) throw new UnderflowException();
    return this.poll()!;
  }

  // non-blocking: return special value to indicate failure.
  abstract offer(item: E): boolean;
  abstract poll(): E | undefined;
  abstract peek(): E | undefined;

  // blocking: wait until action can be performed
  abstract put(item: E): Promise<void>;
  abstract take(): Promise<E>;

  // read-only non-blocking
  toArray(): Array<E> {
    return Array.from(this.iterator());
  }

  // non-blocking
  *drainIterator(): IterableIterator<E> {
    while (!this.isEmpty()) {
      yield this.remove();
    }
  }

  // non-blocking
  abstract iterator(): IterableIterator<E>;

  // async iterator: block
  async *asyncIterator(): AsyncIterableIterator<E> {
    for (;;) {
      const item = await this.take();
      yield item;
    }
  }
}

export abstract class DelegatingBlockingQueue<E> extends BlockingQueue<E> {
  private readonly consumerQueue: ConsumerPromiseResolver<E>[] = [];
  private readonly producerQueue: ProducerPromiseResolver<E>[] = [];

  protected constructor(protected readonly delegate: Queue<E>) {
    super();
  }

  private unlockConsumer() {
    if (this.consumerQueue.length && !this.delegate.isEmpty()) {
      const { resolve } = this.consumerQueue.shift()!;
      const item = this.delegate.remove();
      resolve(item);
    }
  }

  private unlockProducer() {
    if (this.producerQueue.length && !this.delegate.isFull()) {
      const { item, resolve } = this.producerQueue.shift()!;
      this.delegate.add(item);
      resolve();
    }
  }

  add(item: E) {
    this.delegate.add(item);
    this.unlockConsumer();
  }

  put(item: E) {
    return new Promise<void>((resolve, reject) => {
      if (this.delegate.overflowStrategy() !== 'throw' || !this.delegate.isFull()) {
        this.add(item);
        resolve();
      } else {
        this.producerQueue.push({ resolve, reject, item });
      }
    });
  }

  offer(item: E): boolean {
    const result = this.delegate.offer(item);
    if (result) this.unlockConsumer();
    return result;
  }

  remove(): E {
    const item = this.delegate.remove();
    this.unlockProducer();
    return item;
  }

  peek(): E | undefined {
    return this.delegate.peek();
  }

  poll(): E | undefined {
    const item = this.delegate.poll();
    if (item !== undefined) {
      this.unlockProducer();
    }
    return item;
  }

  take(): Promise<E> {
    return new Promise<E>((resolve, reject) => {
      const item = this.poll();
      if (item !== undefined) {
        resolve(item);
      } else {
        this.consumerQueue.push({ resolve, reject });
      }
    });
  }

  size() {
    return this.delegate.size();
  }

  capacity() {
    return this.delegate.capacity();
  }

  contains(item: E) {
    return this.delegate.contains(item);
  }

  toArray() {
    return this.delegate.toArray();
  }

  iterator() {
    return this.delegate[Symbol.iterator]();
  }
}

export class BlockingDeque<E> extends DelegatingBlockingQueue<E> {
  constructor(options?: WithCapacity<QueueOptions>) {
    super(buildCollection<E, ArrayDeque<E>, QueueOptions>(ArrayDeque, options));
  }
}

export class BlockingPriorityQueue<E> extends DelegatingBlockingQueue<E> {
  constructor(options?: WithCapacity<PriorityQueueOptions<E>>) {
    super(buildCollection<E, PriorityQueue<E>, PriorityQueueOptions<E>>(PriorityQueue, options));
  }
}

export class BlockingStack<E> extends DelegatingBlockingQueue<E> {
  constructor(options?: WithCapacity<QueueOptions>) {
    super(buildCollection<E, ArrayStack<E>, QueueOptions>(ArrayStack, options));
  }
}

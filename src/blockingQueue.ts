import { ArrayDeque, Container, Queue, UnderflowException } from 'ts-data-collections';
import { Mutex } from './mutex';

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

export abstract class AbstractBlockingQueue<E> extends BlockingQueue<E> {
  private readMutex = new Mutex();
  private writeMutex = new Mutex();

  protected constructor(protected readonly delegate: Queue<E>) {
    super();
  }

  add(item: E) {
    this.delegate.add(item);
    this.readMutex.signal();
  }

  put(item: E) {
    return this.writeMutex.execute(async () => {
      if (this.delegate.overflowStrategy() === 'throw') {
        await this.writeMutex.waitUntil(() => !this.delegate.isFull());
      }
      this.delegate.add(item);
      if (this.delegate.size()) this.readMutex.signal();
    });
  }

  offer(item: E): boolean {
    const result = this.delegate.offer(item);
    if (result) this.readMutex.signal();
    return result;
  }

  remove(): E {
    const item = this.delegate.remove();
    this.readMutex.signal();
    return item;
  }

  peek(): E | undefined {
    return this.delegate.peek();
  }

  poll(): E | undefined {
    const item = this.delegate.poll();
    if (item !== undefined) {
      this.writeMutex.signal();
    }
    return item;
  }

  take(): Promise<E> {
    return this.readMutex.execute(async () => {
      await this.readMutex.waitUntil(() => !this.delegate.isEmpty());
      const item = this.delegate.remove();
      this.writeMutex.signal();
      return item;
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

export class BlockingDeque<E> extends AbstractBlockingQueue<E> {
  constructor(capacity: number) {
    super(ArrayDeque.create({ capacity }));
  }
}

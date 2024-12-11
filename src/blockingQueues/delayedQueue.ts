import { PriorityQueue, QueueOptions } from 'ts-data-collections';
import { Comparators } from 'ts-fluent-iterators';
import { ConsumerPromiseResolver, ProducerPromiseResolver } from '../helpers/types';

type QueueItem<E> = {
  item: E;
  availableAt: number;
};

interface DelayedProducerPromiseResolver<E> extends ProducerPromiseResolver<E> {
  delay: number;
}

const comparator = Comparators.byAttr('availableAt');

export class DelayedQueue<E> {
  private readonly heap: PriorityQueue<QueueItem<E>>;
  private waitingProducers: DelayedProducerPromiseResolver<E>[] = [];
  private waitingConsumers: ConsumerPromiseResolver<E>[] = [];

  constructor(options?: Omit<QueueOptions, 'comparator' | 'overflowStrategy'>) {
    this.heap = new PriorityQueue<QueueItem<E>>({ ...options, comparator });
  }

  private scheduleResolveWaitingConsumer(delay: number) {
    setTimeout(() => {
      this.tryResolveWaitingConsumer();
    }, delay);
  }

  add(item: E, delay: number) {
    this.heap.add({ item, availableAt: Date.now() + delay });
    this.scheduleResolveWaitingConsumer(delay);
  }

  /**
   * Adds an item to the queue with a specified delay.
   * Waits if the queue is full.
   * @param item The item to add.
   * @param delay The delay in milliseconds.
   */
  async put(item: E, delay: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.heap.isFull() && this.heap.overflowStrategy() == 'throw') {
        this.waitingProducers.push({ resolve, reject, item, delay });
      } else {
        const availableAt = Date.now() + delay;
        this.heap.add({ item, availableAt });

        // Schedule the item to be added to the heap when ready
        this.scheduleResolveWaitingConsumer(delay);
        resolve();
      }
    });
  }

  /**
   * Retrieves an item from the queue, waiting if necessary until an item is available.
   * @returns A promise that resolves with the item.
   */
  async take(): Promise<E> {
    return new Promise((resolve, reject) => {
      this.tryResolveWaitingConsumer({ resolve, reject });
    });
  }

  /**
   * Resolves waiting consumers with ready items.
   * Inserts scheduled items into the heap if their delay has expired.
   */
  private tryResolveWaitingConsumer(resolve?: ConsumerPromiseResolver<E>): void {
    const now = Date.now();

    if (resolve) {
      this.waitingConsumers.push(resolve);
    }

    // Notify pending consumers
    while (!this.heap.isEmpty() && this.waitingConsumers.length > 0) {
      const { item, availableAt } = this.heap.peek()!;
      if (availableAt <= now) {
        this.heap.remove();
        const { resolve: consumer } = this.waitingConsumers.shift()!;
        consumer(item);
        this.tryResolveWaitingProducer(); // Notify waiting producers
      } else {
        break;
      }
    }
  }

  /**
   * Attempts to add an item to the queue without blocking.
   * @param item The item to add.
   * @param delay The delay in milliseconds.
   * @returns `true` if the item is added successfully; `false` if the queue is full.
   */
  offer(item: E, delay: number): boolean {
    const result = this.heap.offer({ item, availableAt: Date.now() + delay });
    if (!result) return result;

    // Schedule the item to be added to the heap when ready
    this.scheduleResolveWaitingConsumer(delay);

    return true;
  }

  /**
   * Attempts to retrieve the earliest available item without blocking.
   * @returns The earliest available item if one is ready; otherwise, `null`.
   */
  poll(): E | undefined {
    const item = this.peek();
    if (item === undefined) return undefined;
    this.heap.remove();
    this.tryResolveWaitingProducer();
    return item;
  }

  peek(): E | undefined {
    const now = Date.now();
    const data = this.heap.peek();
    if (data === undefined || data.availableAt >= now) return undefined;
    return data.item;
  }

  /**
   * Resolves the earliest waiting producer if there is room in the queue.
g   */
  private tryResolveWaitingProducer(): void {
    if (!this.waitingProducers.length) return;
    if (this.heap.isFull() && this.heap.overflowStrategy() === 'throw') return;
    const { resolve, item, delay } = this.waitingProducers.shift()!;
    this.heap.add({ item, availableAt: Date.now() + delay });
    resolve();
  }

  /**
   * Returns the size of the queue, including items not yet ready for retrieval.
   * @returns The total number of items in the queue.
   */
  size(): number {
    return this.heap.size();
  }

  /**
   * Returns whether the queue is empty.
   * @returns `true` if the queue is empty; otherwise, `false`.
   */
  isEmpty(): boolean {
    return this.size() === 0;
  }
}

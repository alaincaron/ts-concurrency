import { OverflowException, UnderflowException } from 'ts-data-collections';
import { BlockingQueue } from './blockingQueue';

import { ConsumerPromise, ProducerPromise } from './helpers';

export class SynchronousQueue<E> extends BlockingQueue<E> {
  private readonly producerQueue: ProducerPromise<E>[] = [];
  private readonly consumerQueue: ConsumerPromise<E>[] = [];

  size() {
    return 0;
  }
  capacity() {
    return 0;
  }

  isEmpty() {
    return true;
  }

  isFull() {
    return true;
  }

  remaining() {
    return 0;
  }

  add(_item: E): void {
    throw new OverflowException();
  }

  remove(): E {
    throw new UnderflowException();
  }

  put(item: E): Promise<void> {
    return new Promise(resolve => {
      if (this.consumerQueue.length > 0) {
        const consumerResolve = this.consumerQueue.shift()!;
        consumerResolve(item);
        resolve();
      } else {
        this.producerQueue.push({ item, resolve });
      }
    });
  }

  take(): Promise<E> {
    return new Promise<E>(resolve => {
      if (this.producerQueue.length > 0) {
        const { item, resolve: producerResolve } = this.producerQueue.shift()!;
        producerResolve();
        resolve(item);
      } else {
        this.consumerQueue.push(resolve);
      }
    });
  }

  offer(item: E): boolean {
    if (this.consumerQueue.length > 0) {
      // If there's a waiting consumer, resolve it immediately
      const consumerResolve = this.consumerQueue.shift()!;
      consumerResolve(item);
      return true; // Successfully offered the item
    }
    return false; // No waiting consumer
  }

  poll(): E | undefined {
    if (this.producerQueue.length > 0) {
      // If there's a waiting producer, resolve it immediately
      const { item, resolve: producerResolve } = this.producerQueue.shift()!;
      producerResolve(); // Notify the producer that its item was taken
      return item; // Return the item from the producer
    }
    return undefined; // No waiting producer
  }

  peek(): E | undefined {
    return undefined;
  }

  *iterator(): IterableIterator<E> {}
}

import { OverflowException, UnderflowException } from 'ts-data-collections';
import { BlockingQueue } from './blockingQueue';

import { ConsumerPromiseResolver, ProducerPromiseResolver } from '../helpers/types';

export class SynchronousQueue<E> extends BlockingQueue<E> {
  private readonly producerQueue: ProducerPromiseResolver<E>[] = [];
  private readonly consumerQueue: ConsumerPromiseResolver<E>[] = [];

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
    return new Promise((resolve, reject) => {
      if (this.consumerQueue.length > 0) {
        const { resolve: consumerResolve } = this.consumerQueue.shift()!;
        consumerResolve(item);
        resolve();
      } else {
        this.producerQueue.push({ item, resolve, reject });
      }
    });
  }

  take(): Promise<E> {
    return new Promise<E>((resolve, reject) => {
      if (this.producerQueue.length > 0) {
        const { item, resolve: producerResolve } = this.producerQueue.shift()!;
        producerResolve();
        resolve(item);
      } else {
        this.consumerQueue.push({ resolve, reject });
      }
    });
  }

  offer(item: E): boolean {
    if (this.consumerQueue.length > 0) {
      // If there's a waiting consumer, resolve it immediately
      const { resolve: consumerResolve } = this.consumerQueue.shift()!;
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

  *[Symbol.iterator]() {}
}

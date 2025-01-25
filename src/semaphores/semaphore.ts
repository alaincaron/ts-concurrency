import { ISemaphore } from './types';
import { VoidPromiseResolver } from '../helpers/types';
import { Queue, ArrayDeque } from 'ts-data-collections';

interface SemPromiseResolver extends VoidPromiseResolver {
  required: number;
}

export class InfiniteSemaphore implements ISemaphore {
  private constructor() {}
  private static readonly INSTANCE = new InfiniteSemaphore();

  static instance() {
    return InfiniteSemaphore.INSTANCE;
  }

  remaining() {
    return Infinity;
  }

  tryAcquire(_required?: number) {
    return true;
  }

  async acquire(_required?: number) {}

  release(_permitsToReturn?: number) {}

  execute<T>(f: () => Promise<T> | T, _count?: number) {
    return Promise.resolve(f());
  }
}

export class Semaphore implements ISemaphore {
  private readonly waitingQueue: Queue<SemPromiseResolver> = new ArrayDeque();

  constructor(private permits: number = 0) {
    this.permits = permits;
  }

  remaining(): number {
    return this.permits;
  }

  tryAcquire(required: number = 1): boolean {
    if (this.permits >= required) {
      this.permits -= required;
      return true;
    }
    return false;
  }

  acquire(required: number = 1): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.permits >= required) {
        this.permits -= required;
        resolve();
      } else {
        this.waitingQueue.add({ resolve, reject, required });
      }
    });
  }

  release(permitsToReturn: number = 1): void {
    this.permits += permitsToReturn;
    while (this.permits >= 1 && this.notifyWaiters());
  }

  private notifyWaiters() {
    const iterator = this.waitingQueue.queueIterator();
    for (;;) {
      const item = iterator.next();
      if (item.done) return false;
      const { resolve, required } = item.value;
      if (required <= this.permits) {
        this.permits -= required;
        iterator.remove();
        resolve();
        return true;
      }
    }
  }

  execute<T>(f: () => Promise<T> | T, count: number = 1): Promise<T> {
    return this.acquire(count)
      .then(f)
      .finally(() => this.release(count));
  }
}

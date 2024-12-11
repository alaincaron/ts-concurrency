import { ISemaphore } from './types';
import { VoidPromiseResolver } from '../helpers/types';

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
  private readonly waitingQueue: SemPromiseResolver[] = [];

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
        this.waitingQueue.push({ resolve, reject, required });
      }
    });
  }

  release(permitsToReturn: number = 1): void {
    this.permits += permitsToReturn;
    while (this.permits >= 1 && this.notifyWaiters());
  }

  private notifyWaiters() {
    for (let i = 0; i < this.waitingQueue.length; ++i) {
      const { resolve, required } = this.waitingQueue[i];
      if (required <= this.permits) {
        this.permits -= required;
        this.waitingQueue.splice(i, 1);
        resolve();
        return true;
      }
    }
    return false;
  }

  execute<T>(f: () => Promise<T> | T, count: number = 1): Promise<T> {
    return this.acquire(count)
      .then(f)
      .finally(() => this.release(count));
  }
}

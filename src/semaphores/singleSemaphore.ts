import { ISingleSemaphore } from './types';
import { VoidPromiseResolver } from '../helpers/types';

export class InfiniteSingleSemaphore implements ISingleSemaphore {
  private constructor() {}
  private static readonly INSTANCE = new InfiniteSingleSemaphore();

  static instance() {
    return InfiniteSingleSemaphore.INSTANCE;
  }

  remaining() {
    return Infinity;
  }

  tryAcquire() {
    return true;
  }

  async acquire() {}

  release(_permitsToReturn?: number) {}

  execute<T>(f: () => Promise<T> | T) {
    return Promise.resolve(f());
  }
}

export class SingleSemaphore implements ISingleSemaphore {
  private readonly waitingQueue: VoidPromiseResolver[] = [];

  constructor(private permits: number = 0) {}

  remaining(): number {
    return this.permits;
  }

  tryAcquire(): boolean {
    if (this.permits >= 1) {
      this.permits--;
      return true;
    }
    return false;
  }

  acquire(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.permits >= 1) {
        --this.permits;
        resolve();
      } else {
        this.waitingQueue.push({ resolve, reject });
      }
    });
  }

  release(): void {
    this.permits++;
    if (this.permits >= 1 && this.waitingQueue.length) {
      const { resolve } = this.waitingQueue.shift()!;
      --this.permits;
      resolve();
    }
  }

  execute<T>(f: () => Promise<T> | T): Promise<T> {
    return this.acquire()
      .then(f)
      .finally(() => this.release());
  }
}

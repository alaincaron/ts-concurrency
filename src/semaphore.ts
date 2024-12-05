import { Mutex } from './mutex';

export interface ISemaphore {
  permits: number;
  canAcquire(required?: number): boolean;
  acquire(required?: number): Promise<void>;
  release(permitsToReturn?: number): void;
  execute<T>(f: () => Promise<T> | T, count?: number): Promise<T>;
}

export class InfiniteSemaphore implements ISemaphore {
  private constructor() {}
  private static readonly INSTANCE = new InfiniteSemaphore();

  static instance() {
    return InfiniteSemaphore.INSTANCE;
  }

  get permits() {
    return Infinity;
  }

  canAcquire(_required?: number) {
    return true;
  }

  async acquire(_required?: number) {}

  release(_permitsToReturn?: number) {}

  execute<T>(f: () => Promise<T> | T, _count?: number) {
    return Promise.resolve(f());
  }
}

export class Semaphore implements ISemaphore {
  private nbPermits: number;
  private mutex: Mutex;

  constructor(nbPermits: number) {
    this.nbPermits = nbPermits;
    this.mutex = new Mutex();
  }

  get permits(): number {
    return this.nbPermits;
  }

  canAcquire(required: number = 1): boolean {
    return this.nbPermits >= required;
  }

  acquire(required: number = 1): Promise<void> {
    return this.mutex.execute(async () => {
      await this.mutex.waitUntil(() => this.nbPermits >= required);
      this.nbPermits -= required;
    });
  }

  release(permitsToReturn: number = 1): void {
    this.nbPermits += permitsToReturn;
    this.mutex.signalAll();
  }

  execute<T>(f: () => Promise<T> | T, count: number = 1): Promise<T> {
    return this.acquire(count)
      .then(f)
      .finally(() => this.release(count));
  }
}

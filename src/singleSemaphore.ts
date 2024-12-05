import { Mutex } from './mutex';

export interface ISingleSemaphore {
  permits: number;
  canAcquire(): boolean;
  acquire(): Promise<void>;
  tryAcquire(): boolean;
  release(): void;
  execute<T>(f: () => Promise<T> | T): Promise<T>;
}

export class InfiniteSingleSemaphore implements ISingleSemaphore {
  private constructor() {}
  private static readonly INSTANCE = new InfiniteSingleSemaphore();

  static instance() {
    return InfiniteSingleSemaphore.INSTANCE;
  }

  get permits() {
    return Infinity;
  }

  canAcquire() {
    return true;
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
  private nbPermits: number;
  private mutex: Mutex;

  constructor(nbPermits: number) {
    this.nbPermits = nbPermits;
    this.mutex = new Mutex();
  }

  get permits(): number {
    return this.nbPermits;
  }

  canAcquire(): boolean {
    return this.nbPermits >= 1;
  }

  tryAcquire(): boolean {
    if (this.nbPermits >= 1) {
      this.nbPermits--;
      return true;
    }
    return false;
  }

  acquire(): Promise<void> {
    return this.mutex.execute(async () => {
      await this.mutex.waitUntil(() => this.nbPermits >= 1);
      --this.nbPermits;
    });
  }

  release(): void {
    this.nbPermits++;
    this.mutex.signal();
  }

  execute<T>(f: () => Promise<T> | T): Promise<T> {
    return this.acquire()
      .then(f)
      .finally(() => this.release());
  }
}

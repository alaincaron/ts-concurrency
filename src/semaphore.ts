import { Mutex } from './mutex';

export class Semaphore {
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

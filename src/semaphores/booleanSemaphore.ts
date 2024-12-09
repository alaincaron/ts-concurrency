import { Resolve } from './helpers';

export class BooleanSemaphore {
  private waitingQueue = new Array<Resolve>();

  constructor(private locked: boolean = false) {}

  isLocked(): boolean {
    return this.locked;
  }

  canAcquire(): boolean {
    return !this.locked;
  }

  tryAcquire(): boolean {
    if (this.locked) return false;
    this.locked = true;
    return true;
  }

  acquire(): Promise<void> {
    return new Promise<void>(resolve => {
      if (this.tryAcquire()) {
        resolve();
      } else {
        this.waitingQueue.push(resolve);
      }
    });
  }

  release(): void {
    if (this.locked) {
      if (this.waitingQueue.length) {
        const resolve = this.waitingQueue.shift()!;
        resolve();
      } else {
        this.locked = false;
      }
    }
  }

  execute<T>(f: () => Promise<T> | T): Promise<T> {
    return this.acquire()
      .then(f)
      .finally(() => this.release());
  }
}

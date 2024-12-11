import { ISingleSemaphore } from './types';
import { VoidPromiseResolver } from '../helpers/types';

export class BooleanSemaphore implements ISingleSemaphore {
  private waitingQueue: VoidPromiseResolver[] = [];

  constructor(private locked: boolean = false) {}

  remaining() {
    return this.locked ? 0 : 1;
  }

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
    return new Promise<void>((resolve, reject) => {
      if (this.tryAcquire()) {
        resolve();
      } else {
        this.waitingQueue.push({ resolve, reject });
      }
    });
  }

  release(): void {
    if (this.locked) {
      if (this.waitingQueue.length) {
        const { resolve } = this.waitingQueue.shift()!;
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

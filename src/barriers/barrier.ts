import { IBarrier } from './types';
import { VoidPromiseResolver } from '../helpers/types';

export class Barrier implements IBarrier {
  private readonly n: number;
  private done = false;
  private readonly waitingQueue: VoidPromiseResolver[] = [];
  constructor(n: number) {
    if (n < 0 || !Number.isSafeInteger(n)) throw new Error(`Invalid non positive integer: ${n}`);
    this.n = n;
  }

  join(): Promise<void> {
    if (this.done) return Promise.resolve();
    const promise = new Promise<void>((resolve, reject) => {
      this.waitingQueue.push({ resolve, reject });
    });
    if (this.waitingQueue.length === this.n) {
      this.done = true;
      for (const { resolve } of this.waitingQueue) {
        resolve();
      }
      this.waitingQueue.length = 0;
    }
    return promise;
  }
}

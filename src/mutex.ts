type VoidFunction = () => void;

type PromiseDefinition = [VoidFunction, VoidFunction];

export class Mutex {
  private queue: Array<PromiseDefinition>;
  private waitQueue: Array<PromiseDefinition>;
  private locked: boolean;

  constructor() {
    this.queue = [];
    this.waitQueue = [];
    this.locked = false;
  }

  lock(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (this.locked) {
        this.queue.push([resolve, reject]);
      } else {
        this.locked = true;
        resolve();
      }
    });
  }

  tryLock(): boolean {
    if (this.locked) return false;
    this.locked = true;
    return true;
  }

  wait(): Promise<void> {
    this.release();
    return new Promise<void>((resolve, reject) => {
      this.waitQueue.push([resolve, reject]);
    }).then(() => this.lock());
  }

  async waitUntil(predicate: () => boolean | Promise<boolean>): Promise<void> {
    while (!(await predicate())) {
      await this.wait();
    }
  }

  signal() {
    if (this.waitQueue.length > 0) {
      const [resolve, _reject] = this.waitQueue.shift()!;
      resolve();
    }
  }

  signalAll() {
    while (this.waitQueue.length > 0) {
      const [resolve, _reject] = this.waitQueue.shift()!;
      resolve();
    }
  }

  release() {
    if (this.queue.length > 0) {
      const [resolve, _reject] = this.queue.shift()!;
      resolve();
    } else {
      this.locked = false;
    }
  }

  execute<T>(f: () => T | Promise<T>): Promise<T> {
    return this.lock()
      .then(f)
      .finally(() => this.release());
  }
}

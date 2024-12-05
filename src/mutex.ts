interface PromiseDefinition {
  resolve: () => void;
  reject: (e: any) => void;
}

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
        this.queue.push({ resolve, reject });
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

  tryExecute<T>(f: () => T) {
    if (this.tryLock()) {
      let result: T | undefined = undefined;
      let err: any = undefined;
      try {
        result = f();
      } catch (e) {
        err = e;
      } finally {
        this.unlock();
      }
      if (err) throw err;
      return { executed: true, result };
    }
    return { executed: false };
  }

  isLocked(): boolean {
    return this.locked;
  }

  async wait(): Promise<void> {
    this.unlock();
    await new Promise<void>((resolve, reject) => {
      this.waitQueue.push({ resolve, reject });
    });
    return this.lock();
  }

  async waitUntil(predicate: () => boolean | Promise<boolean>): Promise<void> {
    while (!(await predicate())) {
      await this.wait();
    }
  }

  signal() {
    if (this.waitQueue.length > 0) {
      const { resolve } = this.waitQueue.shift()!;
      resolve();
    }
  }

  signalAll() {
    while (this.waitQueue.length > 0) {
      const { resolve } = this.waitQueue.shift()!;
      resolve();
    }
  }

  unlock() {
    if (this.queue.length > 0) {
      const { resolve } = this.queue.shift()!;
      resolve();
    } else {
      this.locked = false;
    }
  }

  execute<T>(f: () => T | Promise<T>): Promise<T> {
    return this.lock()
      .then(f)
      .finally(() => this.unlock());
  }
}

import { AsyncLocalStorage } from 'async_hooks';
import * as crypto from 'node:crypto';
import { VoidPromiseResolver } from '../helpers';

interface LockResolver extends VoidPromiseResolver {
  threadId: string;
}

export class RecursiveMutex {
  private currentOwner: string | null = null;
  private lockCount: number = 0;
  private readonly queue: LockResolver[] = [];
  private readonly waitQueue: VoidPromiseResolver[] = [];
  private readonly asyncLocalStorage = new AsyncLocalStorage<string>();

  private createThreadId() {
    return crypto.randomBytes(10).toString('hex');
  }

  getCurrentThreadId(): string | null {
    return this.asyncLocalStorage.getStore() ?? null;
  }

  isLocked() {
    return this.lockCount > 0;
  }

  getOwner() {
    return this.currentOwner;
  }

  getCount() {
    return this.lockCount;
  }

  tryLock(): boolean {
    let threadId = this.getCurrentThreadId();

    if (this.currentOwner) {
      if (this.currentOwner === threadId) {
        // Recursive lock
        this.lockCount++;
        return true;
      }
      return false;
    }

    if (!threadId) threadId = this.createThreadId();
    this.asyncLocalStorage.enterWith(threadId);

    this.lockCount = 1;
    this.currentOwner = threadId;
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

  lock(): Promise<void> {
    let threadId = this.getCurrentThreadId();

    if (this.currentOwner && this.currentOwner === threadId) {
      // Recursive lock
      this.lockCount++;
      return Promise.resolve();
    }

    if (!threadId) {
      threadId = this.createThreadId();
      this.asyncLocalStorage.enterWith(threadId);
    }

    return new Promise<void>((resolve, reject) => {
      if (!this.currentOwner) {
        // Acquire the lock
        this.currentOwner = threadId;
        this.lockCount = 1;
        resolve();
      } else {
        // Enqueue if lock is held
        this.queue.push({ threadId, resolve, reject });
      }
    });
  }

  unlock(): void {
    const threadId = this.getCurrentThreadId();

    if (!threadId || this.currentOwner !== threadId) {
      throw new Error('Cannot unlock: mutex is unlocked or owned by a different thread.');
    }
    this.lockCount--;

    if (this.lockCount === 0) {
      // Release the lock
      this.currentOwner = null;

      // Process the next task in the queue
      const next = this.queue.shift();
      if (next) {
        this.currentOwner = next.threadId;
        this.lockCount = 1;
        next.resolve();
      }
    }
  }

  async wait(): Promise<void> {
    if (!this.currentOwner || this.currentOwner !== this.getCurrentThreadId()) {
      throw new Error('Cannot wait: not owner');
    }
    const count = this.lockCount;

    if (this.queue.length > 0) {
      const { threadId, resolve } = this.queue.shift()!;
      this.currentOwner = threadId;
      this.lockCount = 1;
      resolve();
    } else {
      this.currentOwner = null;
      this.lockCount = 0;
    }

    await new Promise<void>((resolve, reject) => {
      this.waitQueue.push({ resolve, reject });
    });
    await this.lock();
    this.lockCount = count;
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
    for (const { resolve } of this.waitQueue) {
      resolve();
    }
    this.waitQueue.length = 0;
  }

  async execute<T>(fn: () => T | Promise<T>): Promise<T> {
    let threadId = this.getCurrentThreadId();
    if (!threadId) {
      threadId = this.createThreadId();

      return this.asyncLocalStorage.run(threadId, async () => {
        await this.lock();
        try {
          return await fn();
        } finally {
          this.unlock();
        }
      });
    }

    await this.lock();
    try {
      return await fn();
    } finally {
      this.unlock();
    }
  }
}

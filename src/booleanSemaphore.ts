import { Mutex } from './mutex';

export class BooleanSemaphore {
  private mutex: Mutex = new Mutex();

  constructor(private _locked: boolean = false) {}

  get locked(): boolean {
    return this._locked;
  }

  canAcquire(): boolean {
    return !this._locked;
  }

  tryAcquire(): boolean {
    if (this._locked) return false;
    this._locked = true;
    return true;
  }

  acquire(): Promise<void> {
    return this.mutex.execute(async () => {
      await this.mutex.waitUntil(() => !this._locked);
      this._locked = true;
    });
  }

  release(): void {
    if (this._locked) {
      this._locked = false;
      this.mutex.signal();
    }
  }

  execute<T>(f: () => Promise<T> | T): Promise<T> {
    return this.acquire()
      .then(f)
      .finally(() => this.release());
  }
}

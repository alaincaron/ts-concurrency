export interface ISingleSemaphore {
  remaining(): number;
  acquire(): Promise<void>;
  tryAcquire(): boolean;
  release(): void;
  execute<T>(f: () => Promise<T> | T): Promise<T>;
}

export interface ISemaphore extends ISingleSemaphore {
  tryAcquire(required?: number): boolean;
  acquire(required?: number): Promise<void>;
  release(permitsToReturn?: number): void;
  execute<T>(f: () => Promise<T> | T, count?: number): Promise<T>;
}

import { ArrayDeque, Queue } from 'ts-data-collections';
import { Mutex } from './mutex';

export interface Channel<E> {
  put(item: E): Promise<void>;
  offer(item: E): boolean;
  take(): Promise<E>;
  poll(): E | undefined;
}

export abstract class AbstractChannel<E> implements Channel<E> {
  private readMutex = new Mutex();
  private writeMutex = new Mutex();

  protected constructor(protected readonly delegate: Queue<E>) {}

  put(item: E) {
    return this.writeMutex.execute(async () => {
      await this.writeMutex.waitUntil(() => !this.delegate.isFull());
      this.delegate.add(item);
      this.readMutex.signal();
    });
  }

  offer(item: E) {
    const { result } = this.writeMutex.tryExecute(() => {
      const offerResult = this.delegate.offer(item);
      if (offerResult) this.readMutex.signal();
      return offerResult;
    });
    return !!result;
  }

  poll(): E | undefined {
    const item = this.delegate.poll();
    if (item !== undefined) {
      this.writeMutex.signal();
    }
    return item;
  }

  take(): Promise<E> {
    return this.readMutex.execute(async () => {
      await this.readMutex.waitUntil(() => !this.delegate.isEmpty());
      const item = this.delegate.remove();
      this.writeMutex.signal();
      return item;
    });
  }
}

export abstract class AbstractBlockingQueue<E> extends AbstractChannel<E> {
  constructor(delegate: Queue<E>) {
    super(delegate);
  }

  size() {
    return this.delegate.size();
  }

  isEmpty() {
    return this.delegate.isEmpty();
  }

  capacity() {
    return this.delegate.capacity();
  }

  remaining() {
    return this.delegate.remaining();
  }

  contains(item: E) {
    return this.delegate.contains(item);
  }

  toArray() {
    return this.delegate.toArray();
  }
}

export class BlockingDeque<E> extends AbstractBlockingQueue<E> {
  constructor(capacity: number) {
    super(ArrayDeque.create({ capacity }));
  }
}

import { LinkedList } from 'ts-data-collections';
import { Predicate } from 'ts-fluent-iterators';

export class CondVar<T> {
  private value: T;
  private queue: LinkedList<{
    predicate: Predicate<T>;
    resolve: (t: T) => void;
    reject: (e: Error) => void;
  }>;

  constructor(initialValue: T) {
    this.value = initialValue;
    this.queue = new LinkedList();
  }

  get(): T {
    return this.value;
  }

  async waitStrict(predicate: Predicate<T>): Promise<T> {
    for (;;) {
      await this.wait(predicate);
      if (predicate(this.value)) return this.value;
    }
  }

  async waitStrict2(predicate: Predicate<T>): Promise<T> {
    for (;;) {
      const value = await this.wait(predicate);
      if (value === this.value) return value;
    }
  }

  async wait(predicate: Predicate<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      if (predicate(this.value)) resolve(this.value);
      this.queue.addLast({ predicate, resolve, reject });
    });
  }

  set(value: T) {
    this.value = value;

    const iterator = this.queue.listIterator();
    for (;;) {
      const item = iterator.next();
      if (item.done) break;
      const { predicate, resolve } = item.value;
      if (predicate(value)) {
        iterator.remove();
        resolve(value);
      }
    }
  }
}

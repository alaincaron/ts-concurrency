import { LinkedList } from 'ts-data-collections';
import { Predicate } from 'ts-fluent-iterators';

export class WaitableVariable<T> {
  private value: T;
  private queue: LinkedList<{
    predicate: Predicate<T>;
    resolve: () => void;
  }>;

  constructor(initialValue: T) {
    this.value = initialValue;
    this.queue = new LinkedList();
  }

  get(): T {
    return this.value;
  }

  async wait(predicate: Predicate<T>): Promise<T> {
    while (!predicate(this.value)) {
      await new Promise<void>(resolve => {
        this.queue.addLast({ predicate, resolve });
      });
    }
    return this.value;
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
        resolve();
      }
    }
  }
}

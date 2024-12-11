import { LinkedList } from 'ts-data-collections';

export class WaitableBooleanVariable {
  private value: boolean;
  private queues: LinkedList<() => void>[];

  constructor(initialValue: boolean) {
    this.value = initialValue;
    this.queues = [new LinkedList(), new LinkedList()];
  }

  get(): boolean {
    return this.value;
  }

  async wait(waitValue: boolean): Promise<boolean> {
    while (this.value !== waitValue) {
      if (this.value === waitValue) return this.value;

      await new Promise<void>(resolve => {
        this.queues[waitValue ? 1 : 0].addLast(resolve);
      });
    }
    return this.value;
  }

  set(value: boolean) {
    this.value = value;
    const index = value ? 1 : 0;

    const iterator = this.queues[index].listIterator();
    for (;;) {
      const item = iterator.next();
      if (item.done) break;
      const resolve = item.value;
      iterator.remove();
      resolve();
    }
  }
}

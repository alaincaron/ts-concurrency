import { LinkedList } from 'ts-data-collections';

interface ResolveItem {
  resolve: (v: boolean) => void;
  reject: (e: Error) => void;
}

export class BooleanCondVar {
  private value: boolean;
  private queues: LinkedList<ResolveItem>[];

  constructor(initialValue: boolean) {
    this.value = initialValue;
    this.queues = [new LinkedList(), new LinkedList()];
  }

  get(): boolean {
    return this.value;
  }

  async waitStrict(waitValue: boolean): Promise<boolean> {
    for (;;) {
      const value = await this.wait(waitValue);
      if (value === this.value) return value;
    }
  }

  async wait(waitValue: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      if (this.value === waitValue) resolve(this.value);
      this.queues[waitValue ? 1 : 0].addLast({ resolve, reject });
    });
  }

  set(value: boolean) {
    this.value = value;
    const index = value ? 1 : 0;

    const iterator = this.queues[index].listIterator();
    for (;;) {
      const item = iterator.next();
      if (item.done) break;
      const { resolve } = item.value;
      iterator.remove();
      resolve(value);
    }
  }
}

type Predicate<T> = (t: T) => boolean | Promise<boolean>;

function toPredicatec<T>(condition: T | RegExp | Predicate<T>): Predicate<T> {
  if (typeof condition === 'function') {
    return condition as Predicate<T>;
  }
  if (condition instanceof RegExp) {
    return ((x: string) => condition.test(x)) as Predicate<T>;
  }

  if (typeof condition === 'number' || typeof condition === 'boolean' || typeof condition === 'string') {
    return (value: T) => value === condition;
  }

  throw new TypeError(`Unknown condition type: ${typeof condition}`);
}

export class ConditionVariable<T> {
  private value: T;
  private queue: Array<{
    predicate: (t: T) => boolean | Promise<boolean>;
    resolve: (t: T) => void;
    reject: (e: Error) => void;
  }>;

  constructor(initialValue: T) {
    this.value = initialValue;
    this.queue = [];
  }

  get(): T {
    return this.value;
  }

  wait(condition: T | RegExp | Predicate<T>): Promise<T> {
    const predicate = toPredicatec(condition);
    return new Promise((resolve, reject) => {
      if (predicate(this.value)) resolve(this.value);
      this.queue.push({ predicate, resolve, reject });
    });
  }

  set(value: T) {
    this.value = value;

    for (let i = 0; i < this.queue.length; ++i) {
      const { predicate, resolve } = this.queue[i];
      if (predicate(value)) {
        this.queue.splice(i--, 1);
        resolve(this.value);
      }
    }
  }
}

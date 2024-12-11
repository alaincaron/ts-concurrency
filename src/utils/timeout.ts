export class TimeoutError extends Error {
  constructor(timeout: number | string) {
    super(typeof timeout === 'string' ? timeout : `timeout of ${timeout}ms exceeded`);
    Error.captureStackTrace(this, TimeoutError);
  }
}

export function promiseTimeout<T>(f: (signal: AbortSignal) => T | Promise<T>, timeout: number): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;

  return new Promise((resolve, reject) => {
    // timeout
    const timer = setTimeout(() => {
      reject(new TimeoutError(timeout));
      controller.abort();
    }, timeout);

    Promise.resolve(f(signal))
      .finally(() => clearTimeout(timer))
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

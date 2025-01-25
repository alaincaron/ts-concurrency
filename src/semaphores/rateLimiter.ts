import { SingleSemaphore } from './singleSemaphore';

export class RateLimiter {
  private readonly semaphore: SingleSemaphore;
  private readonly delay: number;

  constructor(rps: number, { timeUnit = 1000, uniformDistribution = false } = {}) {
    this.semaphore = new SingleSemaphore(uniformDistribution ? 1 : rps);
    this.delay = uniformDistribution ? timeUnit / rps : timeUnit;
  }

  async wait() {
    await this.semaphore.acquire();
    setTimeout(() => this.semaphore.release(), this.delay);
  }
}

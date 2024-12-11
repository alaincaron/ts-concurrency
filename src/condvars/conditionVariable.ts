export class ConditionVariable {
  private readonly queue: (() => void)[] = []; // Queue of waiting tasks

  /**
   * Waits for the condition to be signaled.
   * This method returns a promise that resolves when `signal` or `broadcast` is called.
   */
  async wait(): Promise<void> {
    return new Promise(resolve => {
      this.queue.push(resolve); // Add the resolve function to the queue
    });
  }

  /**
   * Wakes up one waiting task.
   */
  signal(): void {
    if (this.queue.length > 0) {
      const resolve = this.queue.shift()!; // Remove the first task in the queue
      resolve(); // Wake up the task
    }
  }

  /**
   * Wakes up all waiting tasks.
   */
  broadcast(): void {
    while (this.queue.length > 0) {
      const resolve = this.queue.shift()!;
      resolve(); // Wake up all tasks in the queue
    }
  }
}

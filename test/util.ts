import { Clock } from '@sinonjs/fake-timers';

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const withTimer = async (clock: Clock, test: () => Promise<void>): Promise<void> => {
  const result = test();

  await clock.runAllAsync();

  return result;
};

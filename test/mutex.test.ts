import { install, InstalledClock } from '@sinonjs/fake-timers';
import { expect } from 'chai';
import { withTimer } from './util';
import { Mutex } from '../src';

describe('mutex', () => {
  let clock: InstalledClock;
  let mutex: Mutex;

  before(() => {
    clock = install();
  });

  after(() => {
    clock.uninstall();
  });

  beforeEach(() => {
    mutex = new Mutex();
  });

  describe('tryLock', () => {
    it('should return true if unlocked and false otherwise', () => {
      expect(mutex.tryLock()).equal(true);
      expect(mutex.tryLock()).equal(false);
      mutex.unlock();
      expect(mutex.tryLock()).equal(true);
    });
  });

  describe('lock', () => {
    it('exclusive', () =>
      withTimer(clock, async () => {
        let state = 0;

        await mutex.lock();

        setTimeout(() => {
          state = 1;
          mutex.unlock();
        }, 50);

        expect(state).equal(0);

        await mutex.lock();
        expect(state).equal(1);
        mutex.unlock();
      }));
  });

  describe('execute', () => {
    it('returns result of function and release lock', async () => {
      expect(await mutex.execute(() => 'bar')).equal('bar');
      expect(mutex.isLocked()).equal(false);
    });
    it('throws exception and release lock if function throws', async () => {
      const err = new Error();
      let error = undefined;
      try {
        await mutex.execute(() => {
          expect(mutex.isLocked()).equal(true);
          throw err;
        });
      } catch (e) {
        error = e;
      }
      expect(error).to.equal(err);
      expect(mutex.isLocked()).equal(false);
    });
  });
});

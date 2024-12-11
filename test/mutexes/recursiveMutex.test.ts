import { install, InstalledClock } from '@sinonjs/fake-timers';
import { expect } from 'chai';
import { RecursiveMutex, sleep } from '../../src';
import { withTimer } from '../util';

describe('recursiveMutex', () => {
  let clock: InstalledClock;
  let mutex: RecursiveMutex;

  before(() => {
    clock = install();
  });

  after(() => {
    clock.uninstall();
  });

  beforeEach(() => {
    mutex = new RecursiveMutex();
  });

  describe('tryLock', () => {
    it('should allow nested tryLock', () => {
      expect(mutex.getOwner()).equal(null);
      expect(mutex.isLocked()).equal(false);
      expect(mutex.tryLock()).equal(true);
      expect(mutex.isLocked()).equal(true);
      expect(mutex.tryLock()).equal(true);
      expect(mutex.getCount()).equal(2);
      mutex.unlock();
      expect(mutex.getCount()).equal(1);
      mutex.unlock();
      expect(mutex.getCount()).equal(0);
      expect(mutex.isLocked()).equal(false);
    });
  });

  describe('lock', async () => {
    it('should allow nested lock', async () => {
      expect(mutex.getOwner()).equal(null);
      expect(mutex.isLocked()).equal(false);
      await mutex.lock();
      expect(mutex.tryLock()).equal(true);
      expect(mutex.isLocked()).equal(true);
      expect(mutex.getCount()).equal(2);
      await mutex.lock();
      expect(mutex.getCount()).equal(3);
      mutex.unlock();
      expect(mutex.getCount()).equal(2);
      mutex.unlock();
      expect(mutex.getCount()).equal(1);
      mutex.unlock();
      expect(mutex.isLocked()).equal(false);
    });

    it('exclusive', async () => {
      withTimer(clock, async () => {
        let state = 0;

        const p1 = mutex.execute(async () => {
          await sleep(500);
          state = 1;
        });

        const p2 = mutex.execute(async () => {
          expect(state).equal(1);
          state = 2;
        });

        await Promise.all([p1, p2]);
        expect(state).equal(2);
      });
    });
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

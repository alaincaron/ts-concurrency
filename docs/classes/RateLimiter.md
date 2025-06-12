[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / RateLimiter

# Class: RateLimiter

Defined in: [src/semaphores/rateLimiter.ts:3](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/rateLimiter.ts#L3)

## Constructors

### Constructor

> **new RateLimiter**(`rps`, `__namedParameters`): `RateLimiter`

Defined in: [src/semaphores/rateLimiter.ts:7](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/rateLimiter.ts#L7)

#### Parameters

##### rps

`number`

##### \_\_namedParameters

###### timeUnit?

`number` = `1000`

###### uniformDistribution?

`boolean` = `false`

#### Returns

`RateLimiter`

## Methods

### wait()

> **wait**(): `Promise`\<`void`\>

Defined in: [src/semaphores/rateLimiter.ts:12](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/rateLimiter.ts#L12)

#### Returns

`Promise`\<`void`\>

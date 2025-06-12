[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / BooleanSemaphore

# Class: BooleanSemaphore

Defined in: [src/semaphores/booleanSemaphore.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L4)

## Implements

- [`ISingleSemaphore`](../interfaces/ISingleSemaphore.md)

## Constructors

### Constructor

> **new BooleanSemaphore**(`locked`): `BooleanSemaphore`

Defined in: [src/semaphores/booleanSemaphore.ts:7](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L7)

#### Parameters

##### locked

`boolean` = `false`

#### Returns

`BooleanSemaphore`

## Methods

### acquire()

> **acquire**(): `Promise`\<`void`\>

Defined in: [src/semaphores/booleanSemaphore.ts:27](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`acquire`](../interfaces/ISingleSemaphore.md#acquire)

---

### canAcquire()

> **canAcquire**(): `boolean`

Defined in: [src/semaphores/booleanSemaphore.ts:17](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L17)

#### Returns

`boolean`

---

### execute()

> **execute**\<`T`\>(`f`): `Promise`\<`T`\>

Defined in: [src/semaphores/booleanSemaphore.ts:48](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L48)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`execute`](../interfaces/ISingleSemaphore.md#execute)

---

### isLocked()

> **isLocked**(): `boolean`

Defined in: [src/semaphores/booleanSemaphore.ts:13](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L13)

#### Returns

`boolean`

---

### release()

> **release**(): `void`

Defined in: [src/semaphores/booleanSemaphore.ts:37](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L37)

#### Returns

`void`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`release`](../interfaces/ISingleSemaphore.md#release)

---

### remaining()

> **remaining**(): `0` \| `1`

Defined in: [src/semaphores/booleanSemaphore.ts:9](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L9)

#### Returns

`0` \| `1`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`remaining`](../interfaces/ISingleSemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/semaphores/booleanSemaphore.ts:21](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/booleanSemaphore.ts#L21)

#### Returns

`boolean`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`tryAcquire`](../interfaces/ISingleSemaphore.md#tryacquire)

[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / SingleSemaphore

# Class: SingleSemaphore

Defined in: [src/semaphores/singleSemaphore.ts:29](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L29)

## Implements

- [`ISingleSemaphore`](../interfaces/ISingleSemaphore.md)

## Constructors

### Constructor

> **new SingleSemaphore**(`permits`): `SingleSemaphore`

Defined in: [src/semaphores/singleSemaphore.ts:32](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L32)

#### Parameters

##### permits

`number` = `0`

#### Returns

`SingleSemaphore`

## Methods

### acquire()

> **acquire**(): `Promise`\<`void`\>

Defined in: [src/semaphores/singleSemaphore.ts:46](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L46)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`acquire`](../interfaces/ISingleSemaphore.md#acquire)

---

### execute()

> **execute**\<`T`\>(`f`): `Promise`\<`T`\>

Defined in: [src/semaphores/singleSemaphore.ts:66](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L66)

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

### release()

> **release**(): `void`

Defined in: [src/semaphores/singleSemaphore.ts:57](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L57)

#### Returns

`void`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`release`](../interfaces/ISingleSemaphore.md#release)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/singleSemaphore.ts:34](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L34)

#### Returns

`number`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`remaining`](../interfaces/ISingleSemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/semaphores/singleSemaphore.ts:38](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L38)

#### Returns

`boolean`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`tryAcquire`](../interfaces/ISingleSemaphore.md#tryacquire)

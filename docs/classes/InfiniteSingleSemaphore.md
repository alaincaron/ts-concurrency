[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / InfiniteSingleSemaphore

# Class: InfiniteSingleSemaphore

Defined in: [src/semaphores/singleSemaphore.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L4)

## Implements

- [`ISingleSemaphore`](../interfaces/ISingleSemaphore.md)

## Methods

### acquire()

> **acquire**(): `Promise`\<`void`\>

Defined in: [src/semaphores/singleSemaphore.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`acquire`](../interfaces/ISingleSemaphore.md#acquire)

---

### execute()

> **execute**\<`T`\>(`f`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: [src/semaphores/singleSemaphore.ts:24](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L24)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

#### Returns

`Promise`\<`Awaited`\<`T`\>\>

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`execute`](../interfaces/ISingleSemaphore.md#execute)

---

### release()

> **release**(`_permitsToReturn?`): `void`

Defined in: [src/semaphores/singleSemaphore.ts:22](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L22)

#### Parameters

##### \_permitsToReturn?

`number`

#### Returns

`void`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`release`](../interfaces/ISingleSemaphore.md#release)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/singleSemaphore.ts:12](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L12)

#### Returns

`number`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`remaining`](../interfaces/ISingleSemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/semaphores/singleSemaphore.ts:16](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L16)

#### Returns

`boolean`

#### Implementation of

[`ISingleSemaphore`](../interfaces/ISingleSemaphore.md).[`tryAcquire`](../interfaces/ISingleSemaphore.md#tryacquire)

---

### instance()

> `static` **instance**(): `InfiniteSingleSemaphore`

Defined in: [src/semaphores/singleSemaphore.ts:8](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/singleSemaphore.ts#L8)

#### Returns

`InfiniteSingleSemaphore`

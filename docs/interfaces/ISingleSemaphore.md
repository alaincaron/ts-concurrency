[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / ISingleSemaphore

# Interface: ISingleSemaphore

Defined in: [src/semaphores/types.ts:1](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L1)

## Extended by

- [`ISemaphore`](ISemaphore.md)

## Methods

### acquire()

> **acquire**(): `Promise`\<`void`\>

Defined in: [src/semaphores/types.ts:3](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L3)

#### Returns

`Promise`\<`void`\>

---

### execute()

> **execute**\<`T`\>(`f`): `Promise`\<`T`\>

Defined in: [src/semaphores/types.ts:6](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L6)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

---

### release()

> **release**(): `void`

Defined in: [src/semaphores/types.ts:5](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L5)

#### Returns

`void`

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/types.ts:2](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L2)

#### Returns

`number`

---

### tryAcquire()

> **tryAcquire**(): `boolean`

Defined in: [src/semaphores/types.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L4)

#### Returns

`boolean`

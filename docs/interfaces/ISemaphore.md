[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / ISemaphore

# Interface: ISemaphore

Defined in: [src/semaphores/types.ts:9](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L9)

## Extends

- [`ISingleSemaphore`](ISingleSemaphore.md)

## Methods

### acquire()

> **acquire**(`required?`): `Promise`\<`void`\>

Defined in: [src/semaphores/types.ts:11](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L11)

#### Parameters

##### required?

`number`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`ISingleSemaphore`](ISingleSemaphore.md).[`acquire`](ISingleSemaphore.md#acquire)

---

### execute()

> **execute**\<`T`\>(`f`, `count?`): `Promise`\<`T`\>

Defined in: [src/semaphores/types.ts:13](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L13)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

##### count?

`number`

#### Returns

`Promise`\<`T`\>

#### Overrides

[`ISingleSemaphore`](ISingleSemaphore.md).[`execute`](ISingleSemaphore.md#execute)

---

### release()

> **release**(`permitsToReturn?`): `void`

Defined in: [src/semaphores/types.ts:12](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L12)

#### Parameters

##### permitsToReturn?

`number`

#### Returns

`void`

#### Overrides

[`ISingleSemaphore`](ISingleSemaphore.md).[`release`](ISingleSemaphore.md#release)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/types.ts:2](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L2)

#### Returns

`number`

#### Inherited from

[`ISingleSemaphore`](ISingleSemaphore.md).[`remaining`](ISingleSemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(`required?`): `boolean`

Defined in: [src/semaphores/types.ts:10](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/types.ts#L10)

#### Parameters

##### required?

`number`

#### Returns

`boolean`

#### Overrides

[`ISingleSemaphore`](ISingleSemaphore.md).[`tryAcquire`](ISingleSemaphore.md#tryacquire)

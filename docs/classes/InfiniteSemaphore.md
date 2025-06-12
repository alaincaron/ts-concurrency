[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / InfiniteSemaphore

# Class: InfiniteSemaphore

Defined in: [src/semaphores/semaphore.ts:9](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L9)

## Implements

- [`ISemaphore`](../interfaces/ISemaphore.md)

## Methods

### acquire()

> **acquire**(`_required?`): `Promise`\<`void`\>

Defined in: [src/semaphores/semaphore.ts:25](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L25)

#### Parameters

##### \_required?

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`acquire`](../interfaces/ISemaphore.md#acquire)

---

### execute()

> **execute**\<`T`\>(`f`, `_count?`): `Promise`\<`Awaited`\<`T`\>\>

Defined in: [src/semaphores/semaphore.ts:29](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L29)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

##### \_count?

`number`

#### Returns

`Promise`\<`Awaited`\<`T`\>\>

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`execute`](../interfaces/ISemaphore.md#execute)

---

### release()

> **release**(`_permitsToReturn?`): `void`

Defined in: [src/semaphores/semaphore.ts:27](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L27)

#### Parameters

##### \_permitsToReturn?

`number`

#### Returns

`void`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`release`](../interfaces/ISemaphore.md#release)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/semaphore.ts:17](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L17)

#### Returns

`number`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`remaining`](../interfaces/ISemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(`_required?`): `boolean`

Defined in: [src/semaphores/semaphore.ts:21](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L21)

#### Parameters

##### \_required?

`number`

#### Returns

`boolean`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`tryAcquire`](../interfaces/ISemaphore.md#tryacquire)

---

### instance()

> `static` **instance**(): `InfiniteSemaphore`

Defined in: [src/semaphores/semaphore.ts:13](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L13)

#### Returns

`InfiniteSemaphore`

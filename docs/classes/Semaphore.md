[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / Semaphore

# Class: Semaphore

Defined in: [src/semaphores/semaphore.ts:34](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L34)

## Implements

- [`ISemaphore`](../interfaces/ISemaphore.md)

## Constructors

### Constructor

> **new Semaphore**(`permits`): `Semaphore`

Defined in: [src/semaphores/semaphore.ts:37](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L37)

#### Parameters

##### permits

`number` = `0`

#### Returns

`Semaphore`

## Methods

### acquire()

> **acquire**(`required`): `Promise`\<`void`\>

Defined in: [src/semaphores/semaphore.ts:53](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L53)

#### Parameters

##### required

`number` = `1`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`acquire`](../interfaces/ISemaphore.md#acquire)

---

### execute()

> **execute**\<`T`\>(`f`, `count`): `Promise`\<`T`\>

Defined in: [src/semaphores/semaphore.ts:84](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L84)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

##### count

`number` = `1`

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`execute`](../interfaces/ISemaphore.md#execute)

---

### release()

> **release**(`permitsToReturn`): `void`

Defined in: [src/semaphores/semaphore.ts:64](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L64)

#### Parameters

##### permitsToReturn

`number` = `1`

#### Returns

`void`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`release`](../interfaces/ISemaphore.md#release)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/semaphores/semaphore.ts:41](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L41)

#### Returns

`number`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`remaining`](../interfaces/ISemaphore.md#remaining)

---

### tryAcquire()

> **tryAcquire**(`required`): `boolean`

Defined in: [src/semaphores/semaphore.ts:45](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/semaphores/semaphore.ts#L45)

#### Parameters

##### required

`number` = `1`

#### Returns

`boolean`

#### Implementation of

[`ISemaphore`](../interfaces/ISemaphore.md).[`tryAcquire`](../interfaces/ISemaphore.md#tryacquire)

[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / DelayedQueue

# Class: DelayedQueue\<E\>

Defined in: [src/blockingQueues/delayedQueue.ts:16](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L16)

## Type Parameters

### E

`E`

## Constructors

### Constructor

> **new DelayedQueue**\<`E`\>(`options?`): `DelayedQueue`\<`E`\>

Defined in: [src/blockingQueues/delayedQueue.ts:21](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L21)

#### Parameters

##### options?

`Omit`\<`QueueOptions`, `"overflowStrategy"` \| `"comparator"`\>

#### Returns

`DelayedQueue`\<`E`\>

## Methods

### add()

> **add**(`item`, `delay`): `void`

Defined in: [src/blockingQueues/delayedQueue.ts:31](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L31)

#### Parameters

##### item

`E`

##### delay

`number`

#### Returns

`void`

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/blockingQueues/delayedQueue.ts:150](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L150)

Returns whether the queue is empty.

#### Returns

`boolean`

`true` if the queue is empty; otherwise, `false`.

---

### offer()

> **offer**(`item`, `delay`): `boolean`

Defined in: [src/blockingQueues/delayedQueue.ts:98](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L98)

Attempts to add an item to the queue without blocking.

#### Parameters

##### item

`E`

The item to add.

##### delay

`number`

The delay in milliseconds.

#### Returns

`boolean`

`true` if the item is added successfully; `false` if the queue is full.

---

### peek()

> **peek**(): `undefined` \| `E`

Defined in: [src/blockingQueues/delayedQueue.ts:120](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L120)

#### Returns

`undefined` \| `E`

---

### poll()

> **poll**(): `undefined` \| `E`

Defined in: [src/blockingQueues/delayedQueue.ts:112](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L112)

Attempts to retrieve the earliest available item without blocking.

#### Returns

`undefined` \| `E`

The earliest available item if one is ready; otherwise, `null`.

---

### put()

> **put**(`item`, `delay`): `Promise`\<`void`\>

Defined in: [src/blockingQueues/delayedQueue.ts:42](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L42)

Adds an item to the queue with a specified delay.
Waits if the queue is full.

#### Parameters

##### item

`E`

The item to add.

##### delay

`number`

The delay in milliseconds.

#### Returns

`Promise`\<`void`\>

---

### size()

> **size**(): `number`

Defined in: [src/blockingQueues/delayedQueue.ts:142](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L142)

Returns the size of the queue, including items not yet ready for retrieval.

#### Returns

`number`

The total number of items in the queue.

---

### take()

> **take**(): `Promise`\<`E`\>

Defined in: [src/blockingQueues/delayedQueue.ts:61](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/delayedQueue.ts#L61)

Retrieves an item from the queue, waiting if necessary until an item is available.

#### Returns

`Promise`\<`E`\>

A promise that resolves with the item.

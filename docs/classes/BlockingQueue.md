[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / BlockingQueue

# Class: `abstract` BlockingQueue\<E\>

Defined in: [src/blockingQueues/blockingQueue.ts:16](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L16)

## Extends

- `AbstractContainer`

## Extended by

- [`DelegatingBlockingQueue`](DelegatingBlockingQueue.md)
- [`SynchronousQueue`](SynchronousQueue.md)

## Type Parameters

### E

`E`

## Implements

- `Iterable`\<`E`\>

## Constructors

### Constructor

> **new BlockingQueue**\<`E`\>(): `BlockingQueue`\<`E`\>

#### Returns

`BlockingQueue`\<`E`\>

#### Inherited from

`AbstractContainer.constructor`

## Methods

### \[iterator\]()

> `abstract` **\[iterator\]**(): `Iterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:47](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L47)

#### Returns

`Iterator`\<`E`\>

#### Implementation of

`Iterable.[iterator]`

---

### add()

> `abstract` **add**(`item`): `void`

Defined in: [src/blockingQueues/blockingQueue.ts:18](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L18)

#### Parameters

##### item

`E`

#### Returns

`void`

---

### asyncIterator()

> **asyncIterator**(): `AsyncIterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:50](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L50)

#### Returns

`AsyncIterableIterator`\<`E`\>

---

### capacity()

> **capacity**(): `number`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:64

Returns the capacity of this Container, i.e. the maximum
number of elements it can contain.

#### Returns

`number`

The capacity of this Container

#### Inherited from

`AbstractContainer.capacity`

---

### drainIterator()

> **drainIterator**(): `IterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:40](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L40)

#### Returns

`IterableIterator`\<`E`\>

---

### element()

> **element**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L20)

#### Returns

`E`

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:69

Returns `true` if this Container is empty, i.e., its size is `0`.

#### Returns

`boolean`

`true` if this Container is empty, `false` otherwise.

#### Inherited from

`AbstractContainer.isEmpty`

---

### isFull()

> **isFull**(): `boolean`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:74

Returns `true` if this Container is full, i.e. its size is greater than or equal to is capacity.\*

#### Returns

`boolean`

`true` if this Container is full, false otherwise.

#### Inherited from

`AbstractContainer.isFull`

---

### offer()

> `abstract` **offer**(`item`): `boolean`

Defined in: [src/blockingQueues/blockingQueue.ts:26](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L26)

#### Parameters

##### item

`E`

#### Returns

`boolean`

---

### peek()

> `abstract` **peek**(): `undefined` \| `E`

Defined in: [src/blockingQueues/blockingQueue.ts:28](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L28)

#### Returns

`undefined` \| `E`

---

### poll()

> `abstract` **poll**(): `undefined` \| `E`

Defined in: [src/blockingQueues/blockingQueue.ts:27](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L27)

#### Returns

`undefined` \| `E`

---

### put()

> `abstract` **put**(`item`): `Promise`\<`void`\>

Defined in: [src/blockingQueues/blockingQueue.ts:31](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L31)

#### Parameters

##### item

`E`

#### Returns

`Promise`\<`void`\>

---

### remaining()

> **remaining**(): `number`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:81

Returns the number of elements that can be added to this
Container without exceeding its `capacity`.

#### Returns

`number`

the number of elements that can be added to this Container without exceeding its `capacity`.

#### Inherited from

`AbstractContainer.remaining`

---

### remove()

> `abstract` **remove**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:19](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L19)

#### Returns

`E`

---

### size()

> `abstract` **size**(): `number`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:57

Returns the number of items in this Container.

#### Returns

`number`

the number of items in this Container.

#### Inherited from

`AbstractContainer.size`

---

### take()

> `abstract` **take**(): `Promise`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:32](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L32)

#### Returns

`Promise`\<`E`\>

---

### toArray()

> **toArray**(): `E`[]

Defined in: [src/blockingQueues/blockingQueue.ts:35](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L35)

#### Returns

`E`[]

[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / SynchronousQueue

# Class: SynchronousQueue\<E\>

Defined in: [src/blockingQueues/synchronousQueue.ts:6](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L6)

## Extends

- [`BlockingQueue`](BlockingQueue.md)\<`E`\>

## Type Parameters

### E

`E`

## Constructors

### Constructor

> **new SynchronousQueue**\<`E`\>(): `SynchronousQueue`\<`E`\>

#### Returns

`SynchronousQueue`\<`E`\>

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`constructor`](BlockingQueue.md#constructor)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Generator`\<`never`, `void`, `unknown`\>

Defined in: [src/blockingQueues/synchronousQueue.ts:85](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L85)

#### Returns

`Generator`\<`never`, `void`, `unknown`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`[iterator]`](BlockingQueue.md#iterator)

---

### add()

> **add**(`_item`): `void`

Defined in: [src/blockingQueues/synchronousQueue.ts:29](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L29)

#### Parameters

##### \_item

`E`

#### Returns

`void`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`add`](BlockingQueue.md#add)

---

### asyncIterator()

> **asyncIterator**(): `AsyncIterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:50](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L50)

#### Returns

`AsyncIterableIterator`\<`E`\>

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`asyncIterator`](BlockingQueue.md#asynciterator)

---

### capacity()

> **capacity**(): `number`

Defined in: [src/blockingQueues/synchronousQueue.ts:13](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L13)

Returns the capacity of this Container, i.e. the maximum
number of elements it can contain.

#### Returns

`number`

The capacity of this Container

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`capacity`](BlockingQueue.md#capacity)

---

### drainIterator()

> **drainIterator**(): `IterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:40](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L40)

#### Returns

`IterableIterator`\<`E`\>

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`drainIterator`](BlockingQueue.md#drainiterator)

---

### element()

> **element**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L20)

#### Returns

`E`

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`element`](BlockingQueue.md#element)

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [src/blockingQueues/synchronousQueue.ts:17](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L17)

Returns `true` if this Container is empty, i.e., its size is `0`.

#### Returns

`boolean`

`true` if this Container is empty, `false` otherwise.

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`isEmpty`](BlockingQueue.md#isempty)

---

### isFull()

> **isFull**(): `boolean`

Defined in: [src/blockingQueues/synchronousQueue.ts:21](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L21)

Returns `true` if this Container is full, i.e. its size is greater than or equal to is capacity.\*

#### Returns

`boolean`

`true` if this Container is full, false otherwise.

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`isFull`](BlockingQueue.md#isfull)

---

### offer()

> **offer**(`item`): `boolean`

Defined in: [src/blockingQueues/synchronousQueue.ts:61](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L61)

#### Parameters

##### item

`E`

#### Returns

`boolean`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`offer`](BlockingQueue.md#offer)

---

### peek()

> **peek**(): `undefined` \| `E`

Defined in: [src/blockingQueues/synchronousQueue.ts:81](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L81)

#### Returns

`undefined` \| `E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`peek`](BlockingQueue.md#peek)

---

### poll()

> **poll**(): `undefined` \| `E`

Defined in: [src/blockingQueues/synchronousQueue.ts:71](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L71)

#### Returns

`undefined` \| `E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`poll`](BlockingQueue.md#poll)

---

### put()

> **put**(`item`): `Promise`\<`void`\>

Defined in: [src/blockingQueues/synchronousQueue.ts:37](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L37)

#### Parameters

##### item

`E`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`put`](BlockingQueue.md#put)

---

### remaining()

> **remaining**(): `number`

Defined in: [src/blockingQueues/synchronousQueue.ts:25](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L25)

Returns the number of elements that can be added to this
Container without exceeding its `capacity`.

#### Returns

`number`

the number of elements that can be added to this Container without exceeding its `capacity`.

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`remaining`](BlockingQueue.md#remaining)

---

### remove()

> **remove**(): `E`

Defined in: [src/blockingQueues/synchronousQueue.ts:33](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L33)

#### Returns

`E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`remove`](BlockingQueue.md#remove)

---

### size()

> **size**(): `number`

Defined in: [src/blockingQueues/synchronousQueue.ts:10](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L10)

Returns the number of items in this Container.

#### Returns

`number`

the number of items in this Container.

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`size`](BlockingQueue.md#size)

---

### take()

> **take**(): `Promise`\<`E`\>

Defined in: [src/blockingQueues/synchronousQueue.ts:49](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/synchronousQueue.ts#L49)

#### Returns

`Promise`\<`E`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`take`](BlockingQueue.md#take)

---

### toArray()

> **toArray**(): `E`[]

Defined in: [src/blockingQueues/blockingQueue.ts:35](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L35)

#### Returns

`E`[]

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`toArray`](BlockingQueue.md#toarray)

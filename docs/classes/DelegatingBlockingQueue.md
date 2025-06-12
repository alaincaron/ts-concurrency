[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / DelegatingBlockingQueue

# Class: `abstract` DelegatingBlockingQueue\<E\>

Defined in: [src/blockingQueues/blockingQueue.ts:58](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L58)

## Extends

- [`BlockingQueue`](BlockingQueue.md)\<`E`\>

## Extended by

- [`BlockingDeque`](BlockingDeque.md)
- [`BlockingPriorityQueue`](BlockingPriorityQueue.md)
- [`BlockingStack`](BlockingStack.md)

## Type Parameters

### E

`E`

## Constructors

### Constructor

> `protected` **new DelegatingBlockingQueue**\<`E`\>(`delegate`): `DelegatingBlockingQueue`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:62](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L62)

#### Parameters

##### delegate

`Queue`\<`E`\>

#### Returns

`DelegatingBlockingQueue`\<`E`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`constructor`](BlockingQueue.md#constructor)

## Properties

### delegate

> `protected` `readonly` **delegate**: `Queue`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:62](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L62)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`, `any`, `any`\>

Defined in: [src/blockingQueues/blockingQueue.ts:149](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L149)

#### Returns

`Iterator`\<`E`, `any`, `any`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`[iterator]`](BlockingQueue.md#iterator)

---

### add()

> **add**(`item`): `void`

Defined in: [src/blockingQueues/blockingQueue.ts:82](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L82)

#### Parameters

##### item

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

Defined in: [src/blockingQueues/blockingQueue.ts:137](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L137)

Returns the capacity of this Container, i.e. the maximum
number of elements it can contain.

#### Returns

`number`

The capacity of this Container

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`capacity`](BlockingQueue.md#capacity)

---

### contains()

> **contains**(`item`): `boolean`

Defined in: [src/blockingQueues/blockingQueue.ts:141](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L141)

#### Parameters

##### item

`E`

#### Returns

`boolean`

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

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:69

Returns `true` if this Container is empty, i.e., its size is `0`.

#### Returns

`boolean`

`true` if this Container is empty, `false` otherwise.

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`isEmpty`](BlockingQueue.md#isempty)

---

### isFull()

> **isFull**(): `boolean`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:74

Returns `true` if this Container is full, i.e. its size is greater than or equal to is capacity.\*

#### Returns

`boolean`

`true` if this Container is full, false otherwise.

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`isFull`](BlockingQueue.md#isfull)

---

### offer()

> **offer**(`item`): `boolean`

Defined in: [src/blockingQueues/blockingQueue.ts:98](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L98)

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

Defined in: [src/blockingQueues/blockingQueue.ts:110](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L110)

#### Returns

`undefined` \| `E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`peek`](BlockingQueue.md#peek)

---

### poll()

> **poll**(): `undefined` \| `E`

Defined in: [src/blockingQueues/blockingQueue.ts:114](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L114)

#### Returns

`undefined` \| `E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`poll`](BlockingQueue.md#poll)

---

### put()

> **put**(`item`): `Promise`\<`void`\>

Defined in: [src/blockingQueues/blockingQueue.ts:87](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L87)

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

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:81

Returns the number of elements that can be added to this
Container without exceeding its `capacity`.

#### Returns

`number`

the number of elements that can be added to this Container without exceeding its `capacity`.

#### Inherited from

[`BlockingQueue`](BlockingQueue.md).[`remaining`](BlockingQueue.md#remaining)

---

### remove()

> **remove**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:104](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L104)

#### Returns

`E`

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`remove`](BlockingQueue.md#remove)

---

### size()

> **size**(): `number`

Defined in: [src/blockingQueues/blockingQueue.ts:133](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L133)

Returns the number of items in this Container.

#### Returns

`number`

the number of items in this Container.

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`size`](BlockingQueue.md#size)

---

### take()

> **take**(): `Promise`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:122](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L122)

#### Returns

`Promise`\<`E`\>

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`take`](BlockingQueue.md#take)

---

### toArray()

> **toArray**(): `E`[]

Defined in: [src/blockingQueues/blockingQueue.ts:145](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L145)

#### Returns

`E`[]

#### Overrides

[`BlockingQueue`](BlockingQueue.md).[`toArray`](BlockingQueue.md#toarray)

---

### toJSON()

> **toJSON**(): `string`

Defined in: [src/blockingQueues/blockingQueue.ts:153](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L153)

#### Returns

`string`

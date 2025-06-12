[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / BlockingDeque

# Class: BlockingDeque\<E\>

Defined in: [src/blockingQueues/blockingQueue.ts:158](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L158)

## Extends

- [`DelegatingBlockingQueue`](DelegatingBlockingQueue.md)\<`E`\>

## Type Parameters

### E

`E`

## Constructors

### Constructor

> **new BlockingDeque**\<`E`\>(`options?`): `BlockingDeque`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:159](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L159)

#### Parameters

##### options?

`WithCapacity`\<`QueueOptions`\>

#### Returns

`BlockingDeque`\<`E`\>

#### Overrides

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`constructor`](DelegatingBlockingQueue.md#constructor)

## Properties

### delegate

> `protected` `readonly` **delegate**: `Queue`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:62](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L62)

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`delegate`](DelegatingBlockingQueue.md#delegate)

## Methods

### \[iterator\]()

> **\[iterator\]**(): `Iterator`\<`E`, `any`, `any`\>

Defined in: [src/blockingQueues/blockingQueue.ts:149](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L149)

#### Returns

`Iterator`\<`E`, `any`, `any`\>

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`[iterator]`](DelegatingBlockingQueue.md#iterator)

---

### add()

> **add**(`item`): `void`

Defined in: [src/blockingQueues/blockingQueue.ts:82](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L82)

#### Parameters

##### item

`E`

#### Returns

`void`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`add`](DelegatingBlockingQueue.md#add)

---

### asyncIterator()

> **asyncIterator**(): `AsyncIterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:50](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L50)

#### Returns

`AsyncIterableIterator`\<`E`\>

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`asyncIterator`](DelegatingBlockingQueue.md#asynciterator)

---

### capacity()

> **capacity**(): `number`

Defined in: [src/blockingQueues/blockingQueue.ts:137](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L137)

Returns the capacity of this Container, i.e. the maximum
number of elements it can contain.

#### Returns

`number`

The capacity of this Container

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`capacity`](DelegatingBlockingQueue.md#capacity)

---

### contains()

> **contains**(`item`): `boolean`

Defined in: [src/blockingQueues/blockingQueue.ts:141](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L141)

#### Parameters

##### item

`E`

#### Returns

`boolean`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`contains`](DelegatingBlockingQueue.md#contains)

---

### drainIterator()

> **drainIterator**(): `IterableIterator`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:40](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L40)

#### Returns

`IterableIterator`\<`E`\>

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`drainIterator`](DelegatingBlockingQueue.md#drainiterator)

---

### element()

> **element**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L20)

#### Returns

`E`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`element`](DelegatingBlockingQueue.md#element)

---

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:69

Returns `true` if this Container is empty, i.e., its size is `0`.

#### Returns

`boolean`

`true` if this Container is empty, `false` otherwise.

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`isEmpty`](DelegatingBlockingQueue.md#isempty)

---

### isFull()

> **isFull**(): `boolean`

Defined in: node_modules/ts-data-collections/dist/utils/container.d.ts:74

Returns `true` if this Container is full, i.e. its size is greater than or equal to is capacity.\*

#### Returns

`boolean`

`true` if this Container is full, false otherwise.

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`isFull`](DelegatingBlockingQueue.md#isfull)

---

### offer()

> **offer**(`item`): `boolean`

Defined in: [src/blockingQueues/blockingQueue.ts:98](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L98)

#### Parameters

##### item

`E`

#### Returns

`boolean`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`offer`](DelegatingBlockingQueue.md#offer)

---

### peek()

> **peek**(): `undefined` \| `E`

Defined in: [src/blockingQueues/blockingQueue.ts:110](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L110)

#### Returns

`undefined` \| `E`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`peek`](DelegatingBlockingQueue.md#peek)

---

### poll()

> **poll**(): `undefined` \| `E`

Defined in: [src/blockingQueues/blockingQueue.ts:114](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L114)

#### Returns

`undefined` \| `E`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`poll`](DelegatingBlockingQueue.md#poll)

---

### put()

> **put**(`item`): `Promise`\<`void`\>

Defined in: [src/blockingQueues/blockingQueue.ts:87](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L87)

#### Parameters

##### item

`E`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`put`](DelegatingBlockingQueue.md#put)

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

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`remaining`](DelegatingBlockingQueue.md#remaining)

---

### remove()

> **remove**(): `E`

Defined in: [src/blockingQueues/blockingQueue.ts:104](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L104)

#### Returns

`E`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`remove`](DelegatingBlockingQueue.md#remove)

---

### size()

> **size**(): `number`

Defined in: [src/blockingQueues/blockingQueue.ts:133](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L133)

Returns the number of items in this Container.

#### Returns

`number`

the number of items in this Container.

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`size`](DelegatingBlockingQueue.md#size)

---

### take()

> **take**(): `Promise`\<`E`\>

Defined in: [src/blockingQueues/blockingQueue.ts:122](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L122)

#### Returns

`Promise`\<`E`\>

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`take`](DelegatingBlockingQueue.md#take)

---

### toArray()

> **toArray**(): `E`[]

Defined in: [src/blockingQueues/blockingQueue.ts:145](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L145)

#### Returns

`E`[]

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`toArray`](DelegatingBlockingQueue.md#toarray)

---

### toJSON()

> **toJSON**(): `string`

Defined in: [src/blockingQueues/blockingQueue.ts:153](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/blockingQueues/blockingQueue.ts#L153)

#### Returns

`string`

#### Inherited from

[`DelegatingBlockingQueue`](DelegatingBlockingQueue.md).[`toJSON`](DelegatingBlockingQueue.md#tojson)

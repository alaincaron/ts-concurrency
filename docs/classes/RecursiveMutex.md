[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / RecursiveMutex

# Class: RecursiveMutex

Defined in: [src/mutexes/recursiveMutex.ts:9](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L9)

## Constructors

### Constructor

> **new RecursiveMutex**(): `RecursiveMutex`

#### Returns

`RecursiveMutex`

## Methods

### execute()

> **execute**\<`T`\>(`fn`): `Promise`\<`T`\>

Defined in: [src/mutexes/recursiveMutex.ts:165](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L165)

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

() => `T` \| `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

---

### getCount()

> **getCount**(): `number`

Defined in: [src/mutexes/recursiveMutex.ts:32](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L32)

#### Returns

`number`

---

### getCurrentThreadId()

> **getCurrentThreadId**(): `null` \| `string`

Defined in: [src/mutexes/recursiveMutex.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L20)

#### Returns

`null` \| `string`

---

### getOwner()

> **getOwner**(): `null` \| `string`

Defined in: [src/mutexes/recursiveMutex.ts:28](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L28)

#### Returns

`null` \| `string`

---

### isLocked()

> **isLocked**(): `boolean`

Defined in: [src/mutexes/recursiveMutex.ts:24](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L24)

#### Returns

`boolean`

---

### lock()

> **lock**(): `Promise`\<`void`\>

Defined in: [src/mutexes/recursiveMutex.ts:73](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L73)

#### Returns

`Promise`\<`void`\>

---

### signal()

> **signal**(): `void`

Defined in: [src/mutexes/recursiveMutex.ts:151](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L151)

#### Returns

`void`

---

### signalAll()

> **signalAll**(): `void`

Defined in: [src/mutexes/recursiveMutex.ts:158](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L158)

#### Returns

`void`

---

### tryExecute()

> **tryExecute**\<`T`\>(`f`): \{ `executed`: `boolean`; `result`: `undefined` \| `T`; \} \| \{ `executed`: `boolean`; `result?`: `undefined`; \}

Defined in: [src/mutexes/recursiveMutex.ts:56](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L56)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T`

#### Returns

\{ `executed`: `boolean`; `result`: `undefined` \| `T`; \} \| \{ `executed`: `boolean`; `result?`: `undefined`; \}

---

### tryLock()

> **tryLock**(): `boolean`

Defined in: [src/mutexes/recursiveMutex.ts:36](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L36)

#### Returns

`boolean`

---

### unlock()

> **unlock**(): `void`

Defined in: [src/mutexes/recursiveMutex.ts:100](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L100)

#### Returns

`void`

---

### wait()

> **wait**(): `Promise`\<`void`\>

Defined in: [src/mutexes/recursiveMutex.ts:122](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L122)

#### Returns

`Promise`\<`void`\>

---

### waitUntil()

> **waitUntil**(`predicate`): `Promise`\<`void`\>

Defined in: [src/mutexes/recursiveMutex.ts:145](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/recursiveMutex.ts#L145)

#### Parameters

##### predicate

() => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`void`\>

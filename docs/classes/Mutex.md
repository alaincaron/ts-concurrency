[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / Mutex

# Class: Mutex

Defined in: [src/mutexes/mutex.ts:3](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L3)

## Constructors

### Constructor

> **new Mutex**(): `Mutex`

#### Returns

`Mutex`

## Methods

### execute()

> **execute**\<`T`\>(`f`): `Promise`\<`T`\>

Defined in: [src/mutexes/mutex.ts:83](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L83)

#### Type Parameters

##### T

`T`

#### Parameters

##### f

() => `T` \| `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

---

### isLocked()

> **isLocked**(): `boolean`

Defined in: [src/mutexes/mutex.ts:42](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L42)

#### Returns

`boolean`

---

### lock()

> **lock**(): `Promise`\<`void`\>

Defined in: [src/mutexes/mutex.ts:8](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L8)

#### Returns

`Promise`\<`void`\>

---

### signal()

> **signal**(): `void`

Defined in: [src/mutexes/mutex.ts:60](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L60)

#### Returns

`void`

---

### signalAll()

> **signalAll**(): `void`

Defined in: [src/mutexes/mutex.ts:67](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L67)

#### Returns

`void`

---

### tryExecute()

> **tryExecute**\<`T`\>(`f`): \{ `executed`: `boolean`; `result`: `undefined` \| `T`; \} \| \{ `executed`: `boolean`; `result?`: `undefined`; \}

Defined in: [src/mutexes/mutex.ts:25](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L25)

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

Defined in: [src/mutexes/mutex.ts:19](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L19)

#### Returns

`boolean`

---

### unlock()

> **unlock**(): `void`

Defined in: [src/mutexes/mutex.ts:74](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L74)

#### Returns

`void`

---

### wait()

> **wait**(): `Promise`\<`void`\>

Defined in: [src/mutexes/mutex.ts:46](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L46)

#### Returns

`Promise`\<`void`\>

---

### waitUntil()

> **waitUntil**(`predicate`): `Promise`\<`void`\>

Defined in: [src/mutexes/mutex.ts:54](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/mutexes/mutex.ts#L54)

#### Parameters

##### predicate

() => `boolean` \| `Promise`\<`boolean`\>

#### Returns

`Promise`\<`void`\>

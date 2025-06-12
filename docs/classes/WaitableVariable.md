[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / WaitableVariable

# Class: WaitableVariable\<T\>

Defined in: [src/condvars/waitableVariable.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableVariable.ts#L4)

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new WaitableVariable**\<`T`\>(`initialValue`): `WaitableVariable`\<`T`\>

Defined in: [src/condvars/waitableVariable.ts:11](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableVariable.ts#L11)

#### Parameters

##### initialValue

`T`

#### Returns

`WaitableVariable`\<`T`\>

## Methods

### get()

> **get**(): `T`

Defined in: [src/condvars/waitableVariable.ts:16](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableVariable.ts#L16)

#### Returns

`T`

---

### set()

> **set**(`value`): `void`

Defined in: [src/condvars/waitableVariable.ts:29](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableVariable.ts#L29)

#### Parameters

##### value

`T`

#### Returns

`void`

---

### wait()

> **wait**(`predicate`): `Promise`\<`T`\>

Defined in: [src/condvars/waitableVariable.ts:20](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableVariable.ts#L20)

#### Parameters

##### predicate

`Predicate`\<`T`\>

#### Returns

`Promise`\<`T`\>

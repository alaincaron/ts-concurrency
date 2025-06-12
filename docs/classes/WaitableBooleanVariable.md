[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / WaitableBooleanVariable

# Class: WaitableBooleanVariable

Defined in: [src/condvars/waitableBooleanVariable.ts:3](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableBooleanVariable.ts#L3)

## Constructors

### Constructor

> **new WaitableBooleanVariable**(`initialValue`): `WaitableBooleanVariable`

Defined in: [src/condvars/waitableBooleanVariable.ts:7](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableBooleanVariable.ts#L7)

#### Parameters

##### initialValue

`boolean`

#### Returns

`WaitableBooleanVariable`

## Methods

### get()

> **get**(): `boolean`

Defined in: [src/condvars/waitableBooleanVariable.ts:12](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableBooleanVariable.ts#L12)

#### Returns

`boolean`

---

### set()

> **set**(`value`): `void`

Defined in: [src/condvars/waitableBooleanVariable.ts:27](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableBooleanVariable.ts#L27)

#### Parameters

##### value

`boolean`

#### Returns

`void`

---

### wait()

> **wait**(`waitValue`): `Promise`\<`boolean`\>

Defined in: [src/condvars/waitableBooleanVariable.ts:16](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/waitableBooleanVariable.ts#L16)

#### Parameters

##### waitValue

`boolean`

#### Returns

`Promise`\<`boolean`\>

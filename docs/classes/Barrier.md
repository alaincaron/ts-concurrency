[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / Barrier

# Class: Barrier

Defined in: [src/barriers/barrier.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/barrier.ts#L4)

## Implements

- [`IBarrier`](../interfaces/IBarrier.md)

## Constructors

### Constructor

> **new Barrier**(`n`): `Barrier`

Defined in: [src/barriers/barrier.ts:8](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/barrier.ts#L8)

#### Parameters

##### n

`number`

#### Returns

`Barrier`

## Methods

### join()

> **join**(): `Promise`\<`void`\>

Defined in: [src/barriers/barrier.ts:13](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/barrier.ts#L13)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBarrier`](../interfaces/IBarrier.md).[`join`](../interfaces/IBarrier.md#join)

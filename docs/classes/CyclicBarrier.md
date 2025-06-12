[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / CyclicBarrier

# Class: CyclicBarrier

Defined in: [src/barriers/cyclicBarrier.ts:4](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/cyclicBarrier.ts#L4)

## Implements

- [`IBarrier`](../interfaces/IBarrier.md)

## Constructors

### Constructor

> **new CyclicBarrier**(`n`): `CyclicBarrier`

Defined in: [src/barriers/cyclicBarrier.ts:7](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/cyclicBarrier.ts#L7)

#### Parameters

##### n

`number`

#### Returns

`CyclicBarrier`

## Methods

### join()

> **join**(): `Promise`\<`void`\>

Defined in: [src/barriers/cyclicBarrier.ts:12](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/barriers/cyclicBarrier.ts#L12)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBarrier`](../interfaces/IBarrier.md).[`join`](../interfaces/IBarrier.md#join)

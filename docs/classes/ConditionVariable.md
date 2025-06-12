[**ts-concurrency**](../README.md)

---

[ts-concurrency](../globals.md) / ConditionVariable

# Class: ConditionVariable

Defined in: [src/condvars/conditionVariable.ts:1](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/conditionVariable.ts#L1)

## Constructors

### Constructor

> **new ConditionVariable**(): `ConditionVariable`

#### Returns

`ConditionVariable`

## Methods

### broadcast()

> **broadcast**(): `void`

Defined in: [src/condvars/conditionVariable.ts:27](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/conditionVariable.ts#L27)

Wakes up all waiting tasks.

#### Returns

`void`

---

### signal()

> **signal**(): `void`

Defined in: [src/condvars/conditionVariable.ts:17](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/conditionVariable.ts#L17)

Wakes up one waiting task.

#### Returns

`void`

---

### wait()

> **wait**(): `Promise`\<`void`\>

Defined in: [src/condvars/conditionVariable.ts:8](https://github.com/alaincaron/ts-concurrency/blob/14635812c23c675e64adee55a3fe7ec34903fcb2/src/condvars/conditionVariable.ts#L8)

Waits for the condition to be signaled.
This method returns a promise that resolves when `signal` or `broadcast` is called.

#### Returns

`Promise`\<`void`\>

# A TypeScript Type-Guard for Filtering out `undefined` Values

In TypeScript, the following code does not compile:
```typescript
const list = ["foo", undefined, "bar"].filter(item => typeof item !== "undefined");
for (const item of list) {
  console.log(item.length); // Object is possibly 'undefined'.
}
```
Because `list` is not a `string[]` but `(string | undefined)[]`.

The type definition of ES5's `Array.find` includes:
```typescript
interface Array<T> {
  // <snip>
  filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
  filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
  // <snip>
}
```
However, the predicate is not a type-guard, and therefore the second variant is assumed instead of the first one.

This package exposes this predicate with a type definition, making the code both compile and more readable:
```typescript
import defined from "defined-type-guard";
const list = ["foo", undefined, "bar"].filter(defined);
for (const item of list) {
  console.log(item.length); // OK
}
```

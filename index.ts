type MaybeUndefined<T> = T extends undefined ? never : T | undefined;
type Defined<T> = T extends undefined ? never : T;

/**
 * A type-guard for filtering out undefined values.
 * @param item the value to check whether it is defined
 * @returns true if item is not undefined; false otherwise
 */
export default function defined<T>(
  item: MaybeUndefined<T>
): item is Defined<T> {
  return typeof item !== "undefined";
}

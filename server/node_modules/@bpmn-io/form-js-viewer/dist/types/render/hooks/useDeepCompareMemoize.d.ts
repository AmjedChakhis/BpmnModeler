/**
 * A custom hook to manage state changes with deep comparison.
 *
 * @template T
 * @param {T} value - The current value to manage.
 * @returns {T} - Returns the current state.
 */
export function useDeepCompareMemoize<T>(value: T): T;

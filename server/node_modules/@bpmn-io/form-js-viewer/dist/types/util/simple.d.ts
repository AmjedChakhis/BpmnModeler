export function isRequired(field: any): any;
export function pathParse(path: any): any;
export function pathsEqual(a: any, b: any): any;
export function generateIndexForType(type: any): any;
export function generateIdForType(type: any): string;
/**
 * @template T
 * @param {T} data
 * @param {(this: any, key: string, value: any) => any} [replacer]
 * @return {T}
 */
export function clone<T>(data: T, replacer?: (this: any, key: string, value: any) => any): T;
export function runRecursively(formField: any, fn: any): void;
export function wrapObjectKeysWithUnderscores(obj: any): {};

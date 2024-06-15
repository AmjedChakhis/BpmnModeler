/**
 * Retrieve readonly value of a form field, given it can be an
 * expression optionally or configured globally.
 *
 * @typedef { import('../../types').FormProperties } FormProperties
 *
 * @param {any} formField
 * @param {FormProperties} properties
 *
 * @returns {boolean}
 */
export function useReadonly(formField: any, properties?: FormProperties): boolean;
/**
 * Retrieve readonly value of a form field, given it can be an
 * expression optionally or configured globally.
 */
export type FormProperties = import('../../types').FormProperties;

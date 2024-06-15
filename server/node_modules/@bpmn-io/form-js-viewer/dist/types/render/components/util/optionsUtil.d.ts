/**
 * Returns the options data for the provided if they can be simply determined, ignoring expression defined options.
 *
 * @param {object} formField
 * @param {object} formData
 */
export function getSimpleOptionsData(formField: object, formData: object): any;
/**
 * Normalizes the provided options data to a format that can be used by the select components.
 * If the options data is not valid, it is filtered out.
 *
 * @param {any[]} optionsData
 *
 * @returns {object[]}
 */
export function normalizeOptionsData(optionsData: any[]): object[];
/**
 * Creates an options object with default values if no options are provided.
 *
 * @param {object} options
 *
 * @returns {object}
 */
export function createEmptyOptions(options?: object): object;

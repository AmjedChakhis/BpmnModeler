/**
 * Template a string reactively based on form data. If the string is not a template, it is returned as is.
 * If the string contains multiple lines, only the first line is returned.
 * Memoised to minimize re-renders
 *
 * @param {string} value
 * @param {Object} [options]
 * @param {boolean} [options.debug = false]
 * @param {boolean} [options.strict = false]
 * @param {Function} [options.buildDebugString]
 *
 */
export function useSingleLineTemplateEvaluation(value: string, options?: {
    debug?: boolean;
    strict?: boolean;
    buildDebugString?: Function;
}): any;

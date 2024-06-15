/**
 * Template a string reactively based on form data. If the string is not a template, it is returned as is.
 * Memoised to minimize re-renders
 *
 * @param {string} value
 * @param {Object} options
 * @param {boolean} [options.debug = false]
 * @param {boolean} [options.strict = false]
 * @param {Function} [options.sanitizer]
 * @param {Function} [options.buildDebugString]
 *
 */
export function useTemplateEvaluation(value: string, options?: {
    debug?: boolean;
    strict?: boolean;
    sanitizer?: Function;
    buildDebugString?: Function;
}): any;

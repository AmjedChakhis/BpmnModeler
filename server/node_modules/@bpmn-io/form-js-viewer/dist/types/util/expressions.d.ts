/**
 * Transform a LocalExpressionContext object into a usable FEEL context.
 *
 * @param {Object} context - The LocalExpressionContext object.
 * @returns {Object} The usable FEEL context.
 */
export function buildExpressionContext(context: any): any;
/**
 * Evaluate a string based on the expressionLanguage and context information.
 * If the string is not an expression, it is returned as is.
 *
 * @param {any} expressionLanguage - The expression language to use.
 * @param {string} value - The string to evaluate.
 * @param {Object} expressionContextInfo - The context information to use.
 * @returns {any} - Evaluated value or the original value if not an expression.
 */
export function runExpressionEvaluation(expressionLanguage: any, value: string, expressionContextInfo: any): any;

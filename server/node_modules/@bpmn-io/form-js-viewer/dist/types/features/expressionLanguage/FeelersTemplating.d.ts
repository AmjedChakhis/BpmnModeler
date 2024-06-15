export class FeelersTemplating {
    /**
     * Determines if the given value is a feelers template.
     *
     * @param {any} value
     * @returns {boolean}
     *
     */
    isTemplate(value: any): boolean;
    /**
     * Retrieve variable names from a given feelers template.
     *
     * @param {string} template
     *
     * @returns {string[]}
     */
    getVariableNames(template: string): string[];
    /**
     * Evaluate a template.
     *
     * @param {string} template
     * @param {Object<string, any>} context
     * @param {Object} options
     * @param {boolean} [options.debug = false]
     * @param {boolean} [options.strict = false]
     * @param {Function} [options.buildDebugString]
     * @param {Function} [options.sanitizer]
     *
     * @returns
     */
    evaluate(template: string, context?: {
        [x: string]: any;
    }, options?: {
        debug?: boolean;
        strict?: boolean;
        buildDebugString?: Function;
        sanitizer?: Function;
    }): any;
    /**
     * @typedef {Object} ExpressionWithDepth
     * @property {number} depth - The depth of the expression in the syntax tree.
     * @property {string} expression - The extracted expression
     */
    /**
   * Extracts all feel expressions in the template along with their depth in the syntax tree.
   * The depth is incremented for child expressions of loops to account for context drilling.
  
   * @name extractExpressionsWithDepth
   * @param {string} template - A feelers template string.
   * @returns {Array<ExpressionWithDepth>} An array of objects, each containing the depth and the extracted expression.
   *
   * @example
   * const template = "Hello {{user}}, you have:{{#loop items}}\n- {{amount}} {{name}}{{/loop}}.";
   * const extractedExpressions = _extractExpressionsWithDepth(template);
   */
    _extractExpressionsWithDepth(template: string): {
        /**
         * - The depth of the expression in the syntax tree.
         */
        depth: number;
        /**
         * - The extracted expression
         */
        expression: string;
    }[];
}
export namespace FeelersTemplating {
    let $inject: any[];
}

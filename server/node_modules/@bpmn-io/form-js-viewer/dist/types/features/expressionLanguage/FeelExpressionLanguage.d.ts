export class FeelExpressionLanguage {
    constructor(eventBus: any);
    _eventBus: any;
    /**
     * Determines if the given value is a FEEL expression.
     *
     * @param {any} value
     * @returns {boolean}
     *
     */
    isExpression(value: any): boolean;
    /**
     * Retrieve variable names from a given FEEL expression.
     *
     * @param {string} expression
     * @param {object} [options]
     * @param {string} [options.type]
     *
     * @returns {string[]}
     */
    getVariableNames(expression: string, options?: {
        type?: string;
    }): string[];
    /**
     * Evaluate an expression.
     *
     * @param {string} expression
     * @param {import('../../types').Data} [data]
     *
     * @returns {any}
     */
    evaluate(expression: string, data?: import('../../types').Data): any;
}
export namespace FeelExpressionLanguage {
    let $inject: string[];
}

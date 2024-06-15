export class ExpressionLoopPreventer {
    constructor(eventBus: any);
    _computedExpressions: any[];
    /**
     * Checks if the expression field has already been computed, and registers it if not.
     *
     * @param {any} expressionField
     * @returns {boolean} - whether the expression field has already been computed within the current cycle
     */
    registerExpressionExecution(expressionField: any): boolean;
    /**
     * Resets the list of computed expressions.
     */
    reset(): void;
}
export namespace ExpressionLoopPreventer {
    let $inject: string[];
}

export class Validator {
    constructor(expressionLanguage: any, conditionChecker: any, form: any, formFieldRegistry: any);
    _expressionLanguage: any;
    _conditionChecker: any;
    _form: any;
    _formFieldRegistry: any;
    /**
     * Validate against a field definition, does not support proper expression evaluation.
     *
     * @deprecated use validateFieldInstance instead
     */
    validateField(field: any, value: any): any[];
    /**
     * Validate a field instance.
     *
     * @param {Object} fieldInstance
     * @param {string} value
     *
     * @returns {Array<string>}
     */
    validateFieldInstance(fieldInstance: any, value: string): Array<string>;
}
export namespace Validator {
    let $inject: string[];
}

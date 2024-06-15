export class Importer {
    /**
     * @constructor
     * @param { import('./FormFieldRegistry').FormFieldRegistry } formFieldRegistry
     * @param { import('./PathRegistry').PathRegistry } pathRegistry
     * @param { import('./FieldFactory').FieldFactory } fieldFactory
     * @param { import('./FormLayouter').FormLayouter } formLayouter
     */
    constructor(formFieldRegistry: import('./FormFieldRegistry').FormFieldRegistry, pathRegistry: import('./PathRegistry').PathRegistry, fieldFactory: import('./FieldFactory').FieldFactory, formLayouter: import('./FormLayouter').FormLayouter);
    _formFieldRegistry: import("./FormFieldRegistry").FormFieldRegistry;
    _pathRegistry: import("./PathRegistry").PathRegistry;
    _fieldFactory: import("./FieldFactory").FieldFactory;
    _formLayouter: import("./FormLayouter").FormLayouter;
    /**
     * Import schema creating rows, fields, attaching additional
     * information to each field and adding fields to the
     * field registry.
     *
     * Additional information attached:
     *
     *   * `id` (unless present)
     *   * `_parent`
     *   * `_path`
     *
     * @param {any} schema
     *
     * @typedef {{ warnings: Error[], schema: any }} ImportResult
     * @returns {ImportResult}
     */
    importSchema(schema: any): {
        warnings: Error[];
        schema: any;
    };
    _cleanup(): void;
    /**
     * @param {{[x: string]: any}} fieldAttrs
     * @param {String} [parentId]
     * @param {number} [index]
     *
     * @return {any} field
     */
    importFormField(fieldAttrs: {
        [x: string]: any;
    }, parentId?: string, index?: number): any;
    /**
     * @param {Array<any>} components
     * @param {string} parentId
     *
     * @return {Array<any>} imported components
     */
    importFormFields(components: Array<any>, parentId: string): Array<any>;
}
export namespace Importer {
    let $inject: string[];
}

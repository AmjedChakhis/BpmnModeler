export class FieldFactory {
    /**
     * @constructor
     *
     * @param  formFieldRegistry
     * @param  formFields
     */
    constructor(formFieldRegistry: any, pathRegistry: any, formFields: any);
    _formFieldRegistry: any;
    _pathRegistry: any;
    _formFields: any;
    create(attrs: any, applyDefaults?: boolean): any;
    _ensureId(field: any): void;
    _ensureKey(field: any): void;
    _enforceDefaultPath(field: any): void;
    _getUniqueKeyPath(field: any): string;
}
export namespace FieldFactory {
    let $inject: string[];
}

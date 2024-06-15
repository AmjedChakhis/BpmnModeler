export class FormFieldRegistry {
    constructor(eventBus: any);
    _eventBus: any;
    _formFields: {};
    _ids: any;
    add(formField: any): void;
    remove(formField: any): void;
    get(id: any): any;
    getAll(): any[];
    getForm(): any;
    forEach(callback: any): void;
    clear(): void;
}
export namespace FormFieldRegistry {
    let $inject: string[];
}

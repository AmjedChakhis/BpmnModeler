export class FormFieldInstanceRegistry {
    constructor(eventBus: any, formFieldRegistry: any, formFields: any);
    _eventBus: any;
    _formFieldRegistry: any;
    _formFields: any;
    _formFieldInstances: {};
    add(instance: any): string;
    remove(instanceId: any): void;
    getAll(): any[];
    getAllKeyed(): any[];
    clear(): void;
}
export namespace FormFieldInstanceRegistry {
    let $inject: string[];
}

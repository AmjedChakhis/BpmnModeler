export class ViewerCommands {
    constructor(commandStack: any, eventBus: any);
    _commandStack: any;
    registerHandlers(): void;
    getHandlers(): {
        'formField.validation.update': typeof UpdateFieldValidationHandler;
        'formFieldInstance.validation.update': typeof UpdateFieldInstanceValidationHandler;
    };
    /**
     * @deprecated
     */
    updateFieldValidation(field: any, value: any, indexes: any): void;
    updateFieldInstanceValidation(fieldInstance: any, value: any): void;
}
export namespace ViewerCommands {
    let $inject: string[];
}
import { UpdateFieldValidationHandler } from './cmd/UpdateFieldValidationHandler';
import { UpdateFieldInstanceValidationHandler } from './cmd/UpdateFieldInstanceValidationHandler';

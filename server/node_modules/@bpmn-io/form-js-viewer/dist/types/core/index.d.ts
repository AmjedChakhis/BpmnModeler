export namespace CoreModule {
    let __depends__: {
        __init__: string[];
        formFields: (string | typeof import("../render").FormFields)[];
        renderer: (string | typeof import("../render/Renderer").Renderer)[];
    }[];
    let eventBus: (string | typeof EventBus)[];
    let importer: (string | typeof Importer)[];
    let fieldFactory: (string | typeof FieldFactory)[];
    let formFieldRegistry: (string | typeof FormFieldRegistry)[];
    let formFieldInstanceRegistry: (string | typeof FormFieldInstanceRegistry)[];
    let pathRegistry: (string | typeof PathRegistry)[];
    let formLayouter: (string | typeof FormLayouter)[];
    let validator: (string | typeof Validator)[];
}
import { Importer } from './Importer';
import { FieldFactory } from './FieldFactory';
import { FormFieldRegistry } from './FormFieldRegistry';
import { PathRegistry } from './PathRegistry';
import { FormLayouter } from './FormLayouter';
import { EventBus } from './EventBus';
import { FormFieldInstanceRegistry } from './FormFieldInstanceRegistry';
import { Validator } from './Validator';
export { Importer, FieldFactory, FormFieldRegistry, PathRegistry, FormLayouter };

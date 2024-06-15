/**
 * The form.
 */
export class Form {
    /**
     * @constructor
     * @param {FormOptions} options
     */
    constructor(options?: FormOptions);
    /**
     * @public
     * @type {OnEventType}
     */
    public on: OnEventType;
    /**
     * @public
     * @type {String}
     */
    public _id: string;
    /**
     * @private
     * @type {Element}
     */
    private _container;
    /**
     * @private
     * @type {State}
     */
    private _state;
    get: {
        <Name extends never>(name: Name): null[Name];
        <T>(name: string): T;
        <T_1>(name: string, strict: true): T_1;
        <T_2>(name: string, strict: boolean): T_2;
    };
    invoke: {
        <T_3>(func: import("didi").FactoryFunction<T_3>, context?: unknown, locals?: import("didi").LocalsMap): T_3;
        <T_4>(func: import("didi").ArrayFunc<T_4>, context?: unknown, locals?: import("didi").LocalsMap): T_4;
    };
    clear(): void;
    /**
     * Destroy the form, removing it from DOM,
     * if attached.
     */
    destroy(): void;
    /**
     * Open a form schema with the given initial data.
     *
     * @param {Schema} schema
     * @param {Data} [data]
     *
     * @return Promise<{ warnings: Array<any> }>
     */
    importSchema(schema: Schema, data?: Data): Promise<any>;
    /**
     * Submit the form, triggering all field validations.
     *
     * @returns { { data: Data, errors: Errors } }
     */
    submit(): {
        data: Data;
        errors: Errors;
    };
    reset(): void;
    /**
     * @returns {Errors}
     */
    validate(): Errors;
    /**
     * @param {Element|string} parentNode
     */
    attachTo(parentNode: Element | string): void;
    detach(): void;
    /**
     * @private
     *
     * @param {boolean} [emit]
     */
    private _detach;
    /**
     * @param {FormProperty} property
     * @param {any} value
     */
    setProperty(property: FormProperty, value: any): void;
    /**
     * @param {FormEvent} type
     * @param {Function} handler
     */
    off(type: FormEvent, handler: Function): void;
    /**
     * @private
     *
     * @param {FormOptions} options
     * @param {Element} container
     *
     * @returns {Injector}
     */
    private _createInjector;
    /**
     * @private
     */
    private _emit;
    /**
     * @internal
     *
     * @param { { fieldInstance: any, value: any } } update
     */
    _update(update: {
        fieldInstance: any;
        value: any;
    }): void;
    /**
     * @internal
     */
    _getState(): State;
    /**
     * @internal
     */
    _setState(state: any): void;
    /**
     * @internal
     */
    _getModules(): ({
        __init__: string[];
        expressionLanguage: (string | typeof import("./features").FeelExpressionLanguage)[];
        templating: (string | typeof import("./features").FeelersTemplating)[];
        conditionChecker: (string | typeof import("./features").ConditionChecker)[];
    } | {
        __init__: string[];
        expressionLoopPreventer: (string | typeof import("./features").ExpressionLoopPreventer)[];
    } | {
        __init__: string[];
        markdownRenderer: (string | typeof import("./features").MarkdownRenderer)[];
    } | {
        __depends__: import("didi").ModuleDeclaration[];
        __init__: string[];
        viewerCommands: (string | typeof import("./features").ViewerCommands)[];
    } | {
        __init__: string[];
        repeatRenderManager: (string | typeof import("./features").RepeatRenderManager)[];
    })[];
    /**
     * @internal
     */
    _onEvent(type: any, priority: any, handler: any): void;
    /**
     * @internal
     */
    _getSubmitData(): {};
    /**
     * @internal
     */
    _getInitializedFieldData(data: any, options?: {}): any;
}
export type Injector = import('./types').Injector;
export type Data = import('./types').Data;
export type Errors = import('./types').Errors;
export type Schema = import('./types').Schema;
export type FormProperties = import('./types').FormProperties;
export type FormProperty = import('./types').FormProperty;
export type FormEvent = import('./types').FormEvent;
export type FormOptions = import('./types').FormOptions;
export type State = {
    data: Data;
    initialData: Data;
    errors: Errors;
    properties: FormProperties;
    schema: Schema;
};
export type OnEventWithPriority = (type: FormEvent, priority: number, handler: Function) => void;
export type OnEventWithOutPriority = (type: FormEvent, handler: Function) => void;
export type OnEventType = OnEventWithPriority & OnEventWithOutPriority;

/**
 * @typedef { { container } } Config
 * @typedef { import('didi').Injector } Injector
 * @typedef { import('../core/EventBus').EventBus } EventBus
 * @typedef { import('../Form').Form } Form
 */
/**
 * @param {Config} config
 * @param {EventBus} eventBus
 * @param {Form} form
 * @param {Injector} injector
 */
export function Renderer(config: Config, eventBus: EventBus, form: Form, injector: Injector): void;
export namespace Renderer {
    let $inject: string[];
}
export type Config = {
    container;
};
export type Injector = import('didi').Injector;
export type EventBus = import('../core/EventBus').EventBus;
export type Form = import('../Form').Form;

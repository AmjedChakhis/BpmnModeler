/**
 * @typedef { import('./types').CreateFormOptions } CreateFormOptions
 */
/**
 * Create a form.
 *
 * @param {CreateFormOptions} options
 *
 * @return {Promise<Form>}
 */
export function createForm(options: CreateFormOptions): Promise<Form>;
export * from "./render";
export * from "./util";
export * from "./features";
export type CreateFormOptions = import('./types').CreateFormOptions;
import { Form } from './Form';
export const schemaVersion: 16;
export { Form };
export { FormFieldRegistry, FormLayouter, Importer, FieldFactory, PathRegistry } from "./core";

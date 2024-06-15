/**
 * @typedef { import('../types').Schema } Schema
 */
/**
 * Parse the schema for variables a form might make use of.
 *
 * @example
 *
 * // retrieve variables from schema
 * const variables = getSchemaVariables(schema);
 *
 * @example
 *
 * // retrieve input variables from schema
 * const inputVariables = getSchemaVariables(schema, { outputs: false });
 *
 * @example
 *
 * // retrieve output variables from schema
 * const outputVariables = getSchemaVariables(schema, { inputs: false });
 *
 * @param {Schema} schema
 * @param {object} [options]
 * @param {any} [options.expressionLanguage]
 * @param {any} [options.templating]
 * @param {any} [options.formFields]
 * @param {boolean} [options.inputs=true]
 * @param {boolean} [options.outputs=true]
 *
 * @return {string[]}
 */
export function getSchemaVariables(schema: Schema, options?: {
    expressionLanguage?: any;
    templating?: any;
    formFields?: any;
    inputs?: boolean;
    outputs?: boolean;
}): string[];
export type Schema = import('../types').Schema;

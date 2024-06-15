/**
 * The PathRegistry class manages a hierarchical structure of paths associated with form fields.
 * It enables claiming, unclaiming, and validating paths within this structure.
 *
 * Example Tree Structure:
 *
 *   [
 *     {
 *       segment: 'root',
 *       claimCount: 1,
 *       children: [
 *         {
 *           segment: 'child1',
 *           claimCount: 2,
 *           children: null  // A leaf node (closed path)
 *         },
 *         {
 *           segment: 'child2',
 *           claimCount: 1,
 *           children: [
 *             {
 *               segment: 'subChild1',
 *               claimCount: 1,
 *               children: []  // An open node (open path)
 *             }
 *           ]
 *         }
 *       ]
 *     }
 *   ]
 */
export class PathRegistry {
    constructor(formFieldRegistry: any, formFields: any, injector: any);
    _formFieldRegistry: any;
    _formFields: any;
    _injector: any;
    _dataPaths: any[];
    canClaimPath(path: any, options?: {}): boolean;
    claimPath(path: any, options?: {}): void;
    unclaimPath(path: any): void;
    /**
     * Applies a function (fn) recursively on a given field and its children.
     *
     * - `field`: Starting field object.
     * - `fn`: Function to apply.
     * - `context`: Optional object for passing data between calls.
     *
     * Stops early if `fn` returns `false`. Useful for traversing the form field tree.
     *
     * @returns {boolean} Success status based on function execution.
     */
    executeRecursivelyOnFields(field: any, fn: any, context?: {}): boolean;
    /**
     * Generates an array representing the binding path to an underlying data object for a form field.
     *
     * @param {Object} field - The field object with properties: `key`, `path`, `id`, and optionally `_parent`.
     * @param {Object} [options={}] - Configuration options.
     * @param {Object} [options.replacements={}] - A map of field IDs to alternative path arrays.
     * @param {Object} [options.indexes=null] - A map of parent IDs to the index of the field within said parent, leave null to get an unindexed path.
     * @param {Object} [options.cutoffNode] - The ID of the parent field at which to stop generating the path.
     *
     * @returns {(Array<string>|undefined)} An array of strings representing the binding path, or undefined if not determinable.
     */
    getValuePath(field: any, options?: {
        replacements?: any;
        indexes?: any;
        cutoffNode?: any;
    }): (Array<string> | undefined);
    clear(): void;
    _addIndexes(localValuePath: any, field: any, indexes: any): any;
}
export namespace PathRegistry {
    let $inject: string[];
}

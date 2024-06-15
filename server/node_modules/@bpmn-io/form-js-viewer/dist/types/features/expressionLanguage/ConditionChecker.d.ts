/**
 * @typedef {object} Condition
 * @property {string} [hide]
 */
export class ConditionChecker {
    constructor(formFieldRegistry: any, pathRegistry: any, eventBus: any);
    _formFieldRegistry: any;
    _pathRegistry: any;
    _eventBus: any;
    /**
     * For given data, remove properties based on condition.
     *
     * @param {Object<string, any>} data
     * @param {Object<string, any>} contextData
     * @param {Object} [options]
     * @param {Function} [options.getFilterPath]
     * @param {boolean} [options.leafNodeDeletionOnly]
     */
    applyConditions(data: {
        [x: string]: any;
    }, contextData?: {
        [x: string]: any;
    }, options?: {
        getFilterPath?: Function;
        leafNodeDeletionOnly?: boolean;
    }): {
        [x: string]: any;
    };
    /**
     * Check if given condition is met. Returns null for invalid/missing conditions.
     *
     * @param {string} condition
     * @param {import('../../types').Data} [data]
     *
     * @returns {boolean|null}
     */
    check(condition: string, data?: import('../../types').Data): boolean | null;
    /**
     * Check if hide condition is met.
     *
     * @param {Condition} condition
     * @param {Object<string, any>} data
     * @returns {boolean}
     */
    _checkHideCondition(condition: Condition, data: {
        [x: string]: any;
    }): boolean;
    _cleanlyClearDataAtPath(valuePath: any, obj: any): void;
    _isEmptyObject(parentObject: any): boolean;
    _isEmptyArray(parentObject: any): boolean;
}
export namespace ConditionChecker {
    let $inject: string[];
}
export type Condition = {
    hide?: string;
};

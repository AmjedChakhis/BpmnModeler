/**
 * @typedef {Object} OptionsGetter
 * @property {Object[]} options - The options data
 * @property {(LOAD_STATES)} loadState - The options data's loading state, to use for conditional rendering
 */
/**
 * A hook to load options for single and multiselect components.
 *
 * @param {Object} field - The form field to handle options for
 * @return {OptionsGetter} optionsGetter - A options getter object providing loading state and options
 */
export function useOptionsAsync(field: any): OptionsGetter;
export type LOAD_STATES = string;
export namespace LOAD_STATES {
    let LOADING: string;
    let LOADED: string;
    let ERROR: string;
}
export type OptionsGetter = {
    /**
     * - The options data
     */
    options: any[];
    /**
     * - The options data's loading state, to use for conditional rendering
     */
    loadState: (LOAD_STATES);
};

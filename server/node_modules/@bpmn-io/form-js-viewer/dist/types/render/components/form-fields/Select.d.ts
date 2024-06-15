export function Select(props: any): import("preact").JSX.Element;
export namespace Select {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export let emptyValue: any;
        export { sanitizeSingleSelectValue as sanitizeValue };
        export { createEmptyOptions as create };
    }
}
declare const type: "select";
import { sanitizeSingleSelectValue } from '../util/sanitizerUtil';
import { createEmptyOptions } from '../util/optionsUtil';
export {};

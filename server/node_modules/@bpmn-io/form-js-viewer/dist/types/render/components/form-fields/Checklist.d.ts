export function Checklist(props: any): import("preact").JSX.Element;
export namespace Checklist {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export let emptyValue: any[];
        export { sanitizeMultiSelectValue as sanitizeValue };
        export { createEmptyOptions as create };
    }
}
declare const type: "checklist";
import { sanitizeMultiSelectValue } from '../util/sanitizerUtil';
import { createEmptyOptions } from '../util/optionsUtil';
export {};

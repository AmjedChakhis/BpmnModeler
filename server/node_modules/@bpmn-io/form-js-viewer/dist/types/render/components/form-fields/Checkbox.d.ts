export function Checkbox(props: any): import("preact").JSX.Element;
export namespace Checkbox {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export let emptyValue: boolean;
        export function sanitizeValue({ value }: {
            value: any;
        }): boolean;
        export function create(options?: {}): {};
    }
}
declare const type: "checkbox";
export {};

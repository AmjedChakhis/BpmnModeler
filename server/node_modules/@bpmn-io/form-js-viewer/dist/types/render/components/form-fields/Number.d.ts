export function Numberfield(props: any): import("preact").JSX.Element;
export namespace Numberfield {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export let emptyValue: any;
        export function sanitizeValue({ value, formField }: {
            value: any;
            formField: any;
        }): any;
        export function create(options?: {}): {};
    }
}
declare const type: "number";
export {};

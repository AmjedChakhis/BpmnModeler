export function ExpressionField(props: any): any;
export namespace ExpressionField {
    namespace config {
        export { type };
        export let label: string;
        export let group: string;
        export let keyed: boolean;
        export let emptyValue: any;
        export let escapeGridRender: boolean;
        export function create(options?: {}): {
            computeOn: string;
        };
    }
}
declare const type: "expression";
export {};

/**
 * @typedef {('asc'|'desc')} Direction
 *
 * @typedef Sorting
 * @property {string} key
 * @property {Direction} direction
 *
 * @typedef Column
 * @property {string} label
 * @property {string} key
 *
 * @typedef Field
 * @property {string} id
 * @property {Array<Column>} [columns]
 * @property {string} [columnsExpression]
 * @property {string} [label]
 * @property {number} [rowCount]
 * @property {string} [dataSource]
 *
 * @typedef Props
 * @property {Field} field
 *
 * @param {Props} props
 * @returns {import("preact").JSX.Element}
 */
export function Table(props: Props): import("preact").JSX.Element;
export namespace Table {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export function create(options?: {}): {
            id: any;
            columnsExpression: string;
        } | {
            id: any;
            columns: Column[];
        } | {
            rowCount: number;
            columns: {
                label: string;
                key: string;
            }[];
        };
        export function generateInitialDemoData(field: Field): {
            id: number;
            name: string;
            date: string;
        }[];
    }
}
export type Direction = ('asc' | 'desc');
export type Sorting = {
    key: string;
    direction: Direction;
};
export type Column = {
    label: string;
    key: string;
};
export type Field = {
    id: string;
    columns?: Array<Column>;
    columnsExpression?: string;
    label?: string;
    rowCount?: number;
    dataSource?: string;
};
export type Props = {
    field: Field;
};
declare const type: "table";
export {};

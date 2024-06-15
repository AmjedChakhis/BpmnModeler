/**
 * @typedef { { id: String, components: Array<String> } } FormRow
 * @typedef { { formFieldId: String, rows: Array<FormRow> } } FormRows
 */
/**
 * Maintains the Form layout in a given structure, for example
 *
 *  [
 *    {
 *      formFieldId: 'FormField_1',
 *      rows: [
 *        { id: 'Row_1', components: [ 'Text_1', 'Textdield_1', ... ]  }
 *      ]
 *    }
 *  ]
 *
 */
export class FormLayouter {
    constructor(eventBus: any);
    /** @type Array<FormRows>  */
    _rows: Array<FormRows>;
    _ids: any;
    _eventBus: any;
    /**
     * @param {FormRow} row
     */
    addRow(formFieldId: any, row: FormRow): void;
    /**
     * @param {String} id
     * @returns {FormRow}
     */
    getRow(id: string): FormRow;
    /**
     * @param {any} formField
     * @returns {FormRow}
     */
    getRowForField(formField: any): FormRow;
    /**
     * @param {String} formFieldId
     * @returns { Array<FormRow> }
     */
    getRows(formFieldId: string): Array<FormRow>;
    /**
     * @returns {string}
     */
    nextRowId(): string;
    /**
     * @param {any} formField
     */
    calculateLayout(formField: any): void;
    clear(): void;
}
export namespace FormLayouter {
    let $inject: string[];
}
export type FormRow = {
    id: string;
    components: Array<string>;
};
export type FormRows = {
    formFieldId: string;
    rows: Array<FormRow>;
};

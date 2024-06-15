export class RepeatRenderManager {
    constructor(form: any, formFields: any, formFieldRegistry: any, pathRegistry: any);
    _form: any;
    _formFields: any;
    _formFieldRegistry: any;
    _pathRegistry: any;
    Repeater(props: any): import("preact").JSX.Element;
    RepeatFooter(props: any): import("preact").JSX.Element;
    /**
     * Checks whether a field is currently repeating its children.
     *
     * @param {string} id - The id of the field to check
     * @returns {boolean} - True if repeatable, false otherwise
     */
    isFieldRepeating(id: string): boolean;
    _getNonCollapsedItems(field: any): any;
}
export namespace RepeatRenderManager {
    let $inject: string[];
}

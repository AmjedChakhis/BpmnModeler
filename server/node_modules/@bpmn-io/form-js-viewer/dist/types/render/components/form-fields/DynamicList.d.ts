export function DynamicList(props: any): import("preact").JSX.Element;
export namespace DynamicList {
    namespace config {
        let type: string;
        let pathed: boolean;
        let repeatable: boolean;
        let label: string;
        let group: string;
        function create(options?: {}): {
            components: any[];
            showOutline: boolean;
            isRepeating: boolean;
            allowAddRemove: boolean;
            defaultRepetitions: number;
        };
    }
}

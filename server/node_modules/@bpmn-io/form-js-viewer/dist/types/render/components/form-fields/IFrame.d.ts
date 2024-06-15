export function IFrame(props: any): import("preact").JSX.Element;
export namespace IFrame {
    namespace config {
        export { type };
        export let keyed: boolean;
        export let label: string;
        export let group: string;
        export function create(options?: {}): {
            security: {
                allowScripts: boolean;
            };
        };
    }
}
declare const type: "iframe";
export {};

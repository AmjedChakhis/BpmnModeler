/**
 * @typedef Props
 * @property {string|undefined} [id]
 * @property {string|undefined} [htmlFor]
 * @property {string|undefined} label
 * @property {string} [class]
 * @property {boolean} [collapseOnEmpty]
 * @property {boolean} [required]
 * @property {import("preact").VNode} [children]
 *
 * @param {Props} props
 * @returns {import("preact").JSX.Element}
 */
export function Label(props: Props): import("preact").JSX.Element;
export type Props = {
    id?: string | undefined;
    htmlFor?: string | undefined;
    label: string | undefined;
    class?: string;
    collapseOnEmpty?: boolean;
    required?: boolean;
    children?: import("preact").VNode;
};

/**
 * Custom hook to scroll an element within a scrollable container.
 *
 * @param {Object} scrolledElementRef - A ref pointing to the DOM element to scroll into view.
 * @param {Array} deps - An array of dependencies that trigger the effect.
 * @param {Object} [scrollOptions={}] - Options defining the behavior of the scrolling.
 * @param {String} [scrollOptions.align='center'] - The alignment of the element within the viewport.
 * @param {String} [scrollOptions.behavior='auto'] - The scrolling behavior.
 * @param {Number} [scrollOptions.offset=0] - An offset that is added to the scroll position.
 * @param {Boolean} [scrollOptions.scrollIfVisible=false] - Whether to scroll even if the element is visible.
 * @param {Array} [flagRefs] - An array of refs that are used as flags to control when to scroll.
 */
export function useScrollIntoView(scrolledElementRef: any, deps: any[], scrollOptions?: {
    align?: string;
    behavior?: string;
    offset?: number;
    scrollIfVisible?: boolean;
}, flagRefs?: any[]): void;

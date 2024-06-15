/**
 * Wrap HTML content in a configuration object for dangerouslySetInnerHTML
 * @param {Object} props
 * @param {string} props.html
 * @param {Function} [props.transform]
 * @param {boolean} [props.sanitize = true]
 * @param {boolean} [props.sanitizeStyleTags = true]
 */
export function useDangerousHTMLWrapper(props: {
    html: string;
    transform?: Function;
    sanitize?: boolean;
    sanitizeStyleTags?: boolean;
}): {
    __html: any;
};

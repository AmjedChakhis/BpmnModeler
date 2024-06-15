export function sanitizeDateTimePickerValue(options: any): string;
export function hasEqualValue(value: any, array: any): boolean;
export function sanitizeSingleSelectValue(options: any): any;
export function sanitizeMultiSelectValue(options: any): any;
/**
 * Sanitizes an image source to ensure we only allow for data URI and links
 * that start with http(s).
 *
 * Note: Most browsers anyway do not support script execution in <img> elements.
 *
 * @param {string} src
 * @returns {string}
 */
export function sanitizeImageSource(src: string): string;
/**
 * Sanitizes an iframe source to ensure we only allow for links
 * that start with http(s).
 *
 * @param {string} src
 * @returns {string}
 */
export function sanitizeIFrameSource(src: string): string;
/**
 * Escapes HTML and returns pure text.
 * @param {string} html
 * @returns {string}
 */
export function escapeHTML(html: string): string;

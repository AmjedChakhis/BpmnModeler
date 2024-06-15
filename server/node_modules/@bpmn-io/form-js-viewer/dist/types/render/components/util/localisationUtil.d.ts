/**
 * Returns date format for the provided locale.
 * If the locale is not provided, uses the browser's locale.
 *
 * @param {string} [locale] - The locale to get date format for.
 * @returns {string} The date format for the locale.
 */
export function getLocaleDateFormat(locale?: string): string;
/**
 * Returns readable date format for the provided locale.
 * If the locale is not provided, uses the browser's locale.
 *
 * @param {string} [locale] - The locale to get readable date format for.
 * @returns {string} The readable date format for the locale.
 */
export function getLocaleReadableDateFormat(locale?: string): string;
/**
 * Returns flatpickr config for the provided locale.
 * If the locale is not provided, uses the browser's locale.
 *
 * @param {string} [locale] - The locale to get flatpickr config for.
 * @returns {object} The flatpickr config for the locale.
 */
export function getLocaleDateFlatpickrConfig(locale?: string): object;

export function getOptionsSource(field: any): string;
export namespace OPTIONS_SOURCES {
    let STATIC: string;
    let INPUT: string;
    let EXPRESSION: string;
}
export const OPTIONS_SOURCE_DEFAULT: string;
export const OPTIONS_SOURCES_LABELS: {
    [x: string]: string;
};
export const OPTIONS_SOURCES_PATHS: {
    [x: string]: string[];
};
export const OPTIONS_SOURCES_DEFAULTS: {
    [x: string]: string | {
        label: string;
        value: string;
    }[];
};

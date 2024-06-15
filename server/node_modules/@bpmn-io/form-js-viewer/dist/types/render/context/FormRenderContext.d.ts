export const FormRenderContext: import("preact").Context<{
    Empty: (props: any) => any;
    Hidden: (props: any) => any;
    Children: (props: any) => import("preact").JSX.Element;
    Element: (props: any) => import("preact").JSX.Element;
    Row: (props: any) => import("preact").JSX.Element;
    Column: (props: any) => any;
    hoverInfo: {
        cleanup: () => void;
    };
}>;

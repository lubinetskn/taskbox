//@ts-ignore
export type GenericProps = { [key:string]: any }

export type Config = {
    name?       : string;
    title?      : string;
    pattern?    : string;
    placeholder?: string;
    mask?       : Array<string|RegExp>;
    rows?       : number;
    maxLength?  : number;
    minLength?  : number;
    max?        : number;
    min?        : number;
}

/* Здесь перечислены все html-атрибуты распространяющиеся на все инпута вне зависимости от их типа */
export type CommonInputAttributes = {
    autoFocus?   : boolean;
    disabled?    : boolean;
    readOnly?    : boolean;
    required?    : boolean;
    form?        : string;
    list?        : string;
    name?        : string;
    autoComplete?: string;
    type?        : string;
    value?       : string;
    tabIndex?    : number;
};

export type State = {
    watch            : boolean;
    valid            : boolean;
    showError        : boolean;
    value            : string;
    validationMessage: string | null;
}


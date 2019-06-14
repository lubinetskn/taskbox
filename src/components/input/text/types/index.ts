import { CommonInputAttributes } from '../../types';

export type DefaultTextInputProps = CommonInputAttributes & {
    type          : 'text';
    classNames    : { [key:string]: string | undefined };
    dataSet?      : { [key:string]: string | number | boolean };
    label         : string;
    className     : string;
    noLabel?      : boolean;
    mask?         : Array<string|RegExp>;
    configName    : string;
    getInputValue?: Function;
    getRef?       : Function;
    errorPosition : string;
}

export type TextInputProps = DefaultTextInputProps & {
    customValidity?       : Function;
    onBlur?               : Function;
    externalValue?        : string;
    watch?                : boolean;
    counterpartValid?     : boolean;
    hideValidationMessage?: boolean;
};


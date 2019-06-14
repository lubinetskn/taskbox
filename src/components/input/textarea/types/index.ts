import { CommonInputAttributes } from '../../types';

export type DefaultTextAreaProps = CommonInputAttributes & {
    noLabel      : boolean;
    errorPosition: string;
    spellCheck?  : string;
    placeholder? : string;
    wrap?        : string;
    label        : string;
    cols?        : number;
    maxlength?   : number;
    minlength?   : number;
    rows?        : number;
}

export type TextAreaProps = DefaultTextAreaProps;

import React from 'react';
declare type InputType = 'text' | 'password';
declare type Props = {
    type: InputType;
    name: string;
    value?: string;
    onChange?: (value: string) => void;
    onError?: (errors: string[]) => void;
    readonly?: boolean;
    label?: string | null;
    rules?: Array<(value: string, name: string) => boolean | string>;
};
declare const Input: React.FC<Props>;
export default Input;

import React from 'react';
import type { OnChangeHandler } from './Select.context';
export declare const SELECT_PREFIX: string;
declare type OptionProps = {
    value: string | null;
    children: React.ReactElement | React.ReactElement[] | string;
    index?: number;
    className?: string;
    disabled?: boolean;
};
declare const Option: React.FC<OptionProps>;
declare type SelectProps = {
    width?: number;
    height?: number;
    onChange?: OnChangeHandler;
    defaultValue?: string | null;
    placeholder?: string | null;
    className?: string;
    disabled?: boolean;
    children: React.ReactElement[] | React.ReactElement;
};
declare type SelectComposition = {
    Option: typeof Option;
};
declare const Select: React.FC<SelectProps> & SelectComposition;
export default Select;

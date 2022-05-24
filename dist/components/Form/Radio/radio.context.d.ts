/// <reference types="react" />
export declare type RadioValue = string | number;
export declare type OnRadioChange = (value: RadioValue) => void;
declare type ContextType = {
    onChange: OnRadioChange;
    name: string;
    value: RadioValue;
    disabled?: boolean;
};
declare const _default: import("react").Context<ContextType>;
export default _default;

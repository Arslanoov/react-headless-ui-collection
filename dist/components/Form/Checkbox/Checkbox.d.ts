import React from 'react';
declare type CheckboxProps = {
    name: string;
    className?: string;
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
};
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;

import React from 'react';
import type { RadioValue, OnRadioChange } from './radio.context';
declare type RadioItemProps = {
    value: RadioValue;
    disabled?: boolean;
    children: React.ReactElement | string;
};
declare const RadioItem: React.FC<RadioItemProps>;
declare type RadioComposition = {
    Item: typeof RadioItem;
};
declare type RadioProps = {
    name: string;
    value: RadioValue;
    onChange: OnRadioChange;
    disabled?: boolean;
    children: React.ReactElement[] | React.ReactElement;
};
declare const Radio: React.FC<RadioProps> & RadioComposition;
export default Radio;

import React from 'react';
import { OnChangeHandler } from './Collapse.context';
declare type PanelProps = {
    children: React.ReactElement[] | React.ReactElement | string;
    index?: number;
    header?: string;
    disabled?: boolean;
    isDefaultActive?: boolean;
    icon?: React.ReactElement | string;
};
declare const Panel: React.FC<PanelProps>;
declare type CollapseProps = {
    children: React.ReactElement[] | React.ReactElement;
    defaultActiveIndex?: number[];
    onChange?: OnChangeHandler;
};
declare type CollapseComposition = {
    Panel: typeof Panel;
};
declare const Collapse: React.FC<CollapseProps> & CollapseComposition;
export default Collapse;

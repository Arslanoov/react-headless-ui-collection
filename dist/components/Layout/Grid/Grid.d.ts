import React from 'react';
declare type ColProps = {
    span?: number;
    children: string | React.ReactElement | React.ReactElement[];
};
export declare const Col: React.FC<ColProps>;
declare type RowProps = {
    className?: string;
    justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | string;
    align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | string;
    children: React.ReactElement | React.ReactElement[];
};
export declare const Row: React.FC<RowProps>;
export {};

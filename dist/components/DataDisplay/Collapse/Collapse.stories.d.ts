import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<React.FC<{
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    defaultActiveIndex?: number[] | undefined;
    onChange?: import("./Collapse.context").OnChangeHandler | undefined;
}> & {
    Panel: React.FC<{
        children: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
        index?: number | undefined;
        header?: string | undefined;
        disabled?: boolean | undefined;
        isDefaultActive?: boolean | undefined;
        icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    }>;
}>;
export default _default;
export declare const DefaultActive: ComponentStory<React.FC<{
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
    defaultActiveIndex?: number[] | undefined;
    onChange?: import("./Collapse.context").OnChangeHandler | undefined;
}> & {
    Panel: React.FC<{
        children: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];
        index?: number | undefined;
        header?: string | undefined;
        disabled?: boolean | undefined;
        isDefaultActive?: boolean | undefined;
        icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    }>;
}>;

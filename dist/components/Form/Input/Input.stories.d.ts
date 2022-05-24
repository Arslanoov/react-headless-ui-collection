import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<React.FC<{
    type: "text" | "password";
    name: string;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onError?: ((errors: string[]) => void) | undefined;
    readonly?: boolean | undefined;
    label?: string | null | undefined;
    rules?: ((value: string, name: string) => string | boolean)[] | undefined;
}>>;
export default _default;
export declare const Text: ComponentStory<React.FC<{
    type: "text" | "password";
    name: string;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onError?: ((errors: string[]) => void) | undefined;
    readonly?: boolean | undefined;
    label?: string | null | undefined;
    rules?: ((value: string, name: string) => string | boolean)[] | undefined;
}>>;
export declare const Password: ComponentStory<React.FC<{
    type: "text" | "password";
    name: string;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onError?: ((errors: string[]) => void) | undefined;
    readonly?: boolean | undefined;
    label?: string | null | undefined;
    rules?: ((value: string, name: string) => string | boolean)[] | undefined;
}>>;
export declare const ReadOnly: ComponentStory<React.FC<{
    type: "text" | "password";
    name: string;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onError?: ((errors: string[]) => void) | undefined;
    readonly?: boolean | undefined;
    label?: string | null | undefined;
    rules?: ((value: string, name: string) => string | boolean)[] | undefined;
}>>;
export declare const WithLabel: ComponentStory<React.FC<{
    type: "text" | "password";
    name: string;
    value?: string | undefined;
    onChange?: ((value: string) => void) | undefined;
    onError?: ((errors: string[]) => void) | undefined;
    readonly?: boolean | undefined;
    label?: string | null | undefined;
    rules?: ((value: string, name: string) => string | boolean)[] | undefined;
}>>;

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<React.FC<{
    label?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    onUpload?: ((file: File | FileList) => void) | undefined;
    onError?: ((error: {
        maxSize: boolean;
        format: boolean;
        required: boolean;
    }) => void) | undefined;
    maxSize?: number | null | undefined;
    formats?: string[] | null | undefined;
    multiple?: boolean | undefined;
}>>;
export default _default;
export declare const Standard: ComponentStory<React.FC<{
    label?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    onUpload?: ((file: File | FileList) => void) | undefined;
    onError?: ((error: {
        maxSize: boolean;
        format: boolean;
        required: boolean;
    }) => void) | undefined;
    maxSize?: number | null | undefined;
    formats?: string[] | null | undefined;
    multiple?: boolean | undefined;
}>>;
export declare const MultipleFiles: ComponentStory<React.FC<{
    label?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    onUpload?: ((file: File | FileList) => void) | undefined;
    onError?: ((error: {
        maxSize: boolean;
        format: boolean;
        required: boolean;
    }) => void) | undefined;
    maxSize?: number | null | undefined;
    formats?: string[] | null | undefined;
    multiple?: boolean | undefined;
}>>;
export declare const Disabled: ComponentStory<React.FC<{
    label?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    onUpload?: ((file: File | FileList) => void) | undefined;
    onError?: ((error: {
        maxSize: boolean;
        format: boolean;
        required: boolean;
    }) => void) | undefined;
    maxSize?: number | null | undefined;
    formats?: string[] | null | undefined;
    multiple?: boolean | undefined;
}>>;
export declare const WithLabel: ComponentStory<React.FC<{
    label?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    disabled?: boolean | undefined;
    onUpload?: ((file: File | FileList) => void) | undefined;
    onError?: ((error: {
        maxSize: boolean;
        format: boolean;
        required: boolean;
    }) => void) | undefined;
    maxSize?: number | null | undefined;
    formats?: string[] | null | undefined;
    multiple?: boolean | undefined;
}>>;

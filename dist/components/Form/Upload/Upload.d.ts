import React from 'react';
declare type ValidationRule = 'maxSize' | 'format' | 'required';
declare type UploadError = {
    [key in ValidationRule]: boolean;
};
declare type UploadProps = {
    label?: string | React.ReactElement;
    disabled?: boolean;
    onUpload?: (file: File | FileList) => void;
    onError?: (error: UploadError) => void;
    maxSize?: number | null;
    formats?: string[] | null;
    multiple?: boolean;
};
declare const Upload: React.FC<UploadProps>;
export default Upload;

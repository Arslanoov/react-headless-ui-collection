import React, { ChangeEvent } from 'react';

import { PREFIX } from '@/const/prefix';

const UPLOAD_PREFIX = `${PREFIX}-upload`;

type ValidationRule = 'maxSize' | 'format' | 'required';

type UploadError = {
  [key in ValidationRule]: boolean;
};

type UploadProps = {
  label?: string | React.ReactElement;
  disabled?: boolean;
  onUpload?: (file: File | FileList) => void;
  onError?: (error: UploadError) => void;
  maxSize?: number | null;
  formats?: string[] | null;
  multiple?: boolean;
};

const Upload: React.FC<UploadProps> = ({
  label = 'Upload',
  disabled = false,
  onUpload = () => {},
  onError = () => {},
  maxSize = null,
  formats = null,
  multiple = false,
}) => {
  const onChange = (files: FileList | null) => {
    const errors: UploadError = {
      maxSize: false,
      format: false,
      required: false,
    };

    if (files) {
      Array.from(files).forEach((file) => {
        if (maxSize !== null && file.size / 1024 > maxSize) {
          errors.maxSize = true;
        }

        if (formats !== null && !formats.includes(file.type)) {
          errors.format = true;
        }
      });

      if (!Object.values(errors).includes(true)) {
        onUpload(multiple ? files : files[0]);
        return;
      }
    } else {
      errors.required = true;
    }

    onError(errors);
  };

  return (
    <label className={UPLOAD_PREFIX}>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) => !disabled && onChange(e.target.files)}
        className={`${UPLOAD_PREFIX}__input`}
        multiple={multiple}
        disabled={disabled}
        data-testid="input"
        type="file"
      />
      {label}
    </label>
  );
};

export default Upload;

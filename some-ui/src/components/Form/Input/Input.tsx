import React from 'react';

import { PREFIX } from '../../../const/prefix';

const INPUT_PREFIX = `${PREFIX}-input`;

type InputType = 'text' | 'password';

type Props = {
  type: InputType;
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  onError?: (errors: string[]) => void;
  readonly?: boolean;
  label?: string | null;
  rules?: Array<(value: string, name: string) => boolean | string>;
};

const Input: React.FC<Props> = ({
  type,
  name,
  label = null,
  value = '',
  onChange = () => {},
  onError = () => {},
  readonly = false,
  rules = [],
}) => {
  const handleChange = (value: string) => {
    const errors: string[] = [];
    rules.forEach((rule) => {
      const validateError = rule(value, name);
      if (validateError) {
        errors.push(validateError as string);
      }
    });

    if (errors.length > 0) {
      onError(errors);
      return;
    }

    onChange(value);
  };

  return (
    <div className={`${INPUT_PREFIX}__container`}>
      {label && (
        <label className={`${INPUT_PREFIX}__label`} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        className={`${INPUT_PREFIX}__input`}
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        disabled={readonly}
      />
    </div>
  );
};

export default Input;

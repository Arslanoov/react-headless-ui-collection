import React from 'react';

import { PREFIX } from '@/const/prefix';

const CHECKBOX_PREFIX = `${PREFIX}-cb`;

type CheckboxProps = {
  name: string;
  className?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label = '',
  className = '',
  checked = false,
  disabled = false,
  onChange = () => {},
}) => {
  return (
    <div className={CHECKBOX_PREFIX}>
      <span className={`${CHECKBOX_PREFIX}__label`}>{label}</span>
      <label
        className={`
          ${CHECKBOX_PREFIX}__container
          ${checked ? CHECKBOX_PREFIX + '__container_checked' : ''}
          ${disabled ? CHECKBOX_PREFIX + '__container_disabled' : ''}
          ${className}
        `}
        htmlFor={name}
      >
        <input
          type="checkbox"
          id={name}
          checked={checked}
          disabled={disabled}
          className={`${CHECKBOX_PREFIX}__checkbox`}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => !disabled && onChange(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default Checkbox;

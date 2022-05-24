import React, { useState, useContext } from 'react';

import type { OnChangeHandler } from './Select.context';

import SelectContext from './Select.context';

import { PREFIX } from '@/const/prefix';

export const SELECT_PREFIX = `${PREFIX}-select`;

type OptionProps = {
  value: string | null;
  children: React.ReactElement | React.ReactElement[] | string;
  index?: number;
  className?: string;
  disabled?: boolean;
};

const Option: React.FC<OptionProps> = ({ children, value = null, index = 0, className = '', disabled = false }) => {
  const { onSelect, width, height } = useContext(SelectContext);

  return (
    <div
      className={`
        ${SELECT_PREFIX}__item
        ${disabled && SELECT_PREFIX + '__item_disabled'}
        ${className}
      `}
      style={{
        width,
        height,
        top: index * height,
      }}
      onClick={() => !disabled && onSelect(value)}
    >
      {children}
    </div>
  );
};

type SelectProps = {
  width?: number;
  height?: number;
  onChange?: OnChangeHandler;
  defaultValue?: string | null;
  placeholder?: string | null;
  className?: string;
  disabled?: boolean;
  children: React.ReactElement[] | React.ReactElement;
};

type SelectComposition = {
  Option: typeof Option;
};

const Select: React.FC<SelectProps> & SelectComposition = ({
  width = 150,
  height = 35,
  onChange = () => {},
  disabled = false,
  placeholder = null,
  defaultValue = null,
  className = '',
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue);
  const [isOpenedSelect, setIsOpenedSelect] = useState<boolean>(false);

  const onSelect = (value: string | null) => {
    if (!disabled && value) {
      setSelectedValue(value);
      onChange(value);
      toggleSelect();
    }
  };

  const toggleSelect = () => setIsOpenedSelect((isSelected) => !isSelected);

  return (
    <div className={`${SELECT_PREFIX}__container`}>
      <div
        onClick={() => !disabled && toggleSelect()}
        className={`
          ${SELECT_PREFIX}__preview
          ${disabled ? SELECT_PREFIX + '__preview_disabled' : ''}
          ${className}
        `}
      >
        {selectedValue || placeholder}
      </div>
      <SelectContext.Provider
        value={{
          onSelect,
          width,
          height,
        }}
      >
        <div className={`${SELECT_PREFIX}__items ${!isOpenedSelect ? SELECT_PREFIX + '__items_hidden' : ''}`}>
          {React.Children.map(children, (child, index) => React.cloneElement(child, { index }))}
        </div>
      </SelectContext.Provider>
    </div>
  );
};

Select.Option = Option;

export default Select;

import React, { useContext } from 'react';

import { PREFIX } from '@/const/prefix';

import type { RadioValue, OnRadioChange } from './radio.context';
import RadioContext from './radio.context';

const RADIO_PREFIX = `${PREFIX}-radio`;

type RadioItemProps = {
  value: RadioValue;
  disabled?: boolean;
  children: React.ReactElement | string;
};

const RadioItem: React.FC<RadioItemProps> = ({ value, children, disabled = false }) => {
  const { onChange, name, value: checkedValue, disabled: isAllDisabled } = useContext(RadioContext);

  const onSelect = () => !disabled && !isAllDisabled && onChange(value);

  return (
    <div className={`${RADIO_PREFIX}__item-container`}>
      <label className={`${RADIO_PREFIX}__item ${value === checkedValue ? RADIO_PREFIX + '__item_checked' : ''}`}>
        <input
          className={`${RADIO_PREFIX}__item-radio`}
          type="radio"
          name={name}
          value={value}
          checked={value === checkedValue}
          onChange={onSelect}
        />
      </label>
      <span onClick={onSelect} className={`${RADIO_PREFIX}__item-label`}>
        {children}
      </span>
    </div>
  );
};

type RadioComposition = {
  Item: typeof RadioItem;
};

type RadioProps = {
  name: string;
  value: RadioValue;
  onChange: OnRadioChange;
  disabled?: boolean;
  children: React.ReactElement[] | React.ReactElement;
};

const Radio: React.FC<RadioProps> & RadioComposition = ({ name, value, onChange, children, disabled = false }) => {
  return (
    <div className={`${RADIO_PREFIX}`}>
      <RadioContext.Provider
        value={{
          onChange,
          name,
          value,
          disabled,
        }}
      >
        {children}
      </RadioContext.Provider>
    </div>
  );
};

Radio.Item = RadioItem;

export default Radio;

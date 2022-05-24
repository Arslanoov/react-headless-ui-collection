import { createContext } from 'react';

export type RadioValue = string | number;

export type OnRadioChange = (value: RadioValue) => void;

type ContextType = {
  onChange: OnRadioChange;
  name: string;
  value: RadioValue;
  disabled?: boolean;
};

export default createContext<ContextType>({
  onChange: () => {},
  name: '',
  value: '',
  disabled: false,
});

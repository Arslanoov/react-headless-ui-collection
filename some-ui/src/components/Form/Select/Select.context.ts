import { createContext } from 'react';

export type OnChangeHandler = (value: string | null) => void;

export default createContext<{
  onSelect: OnChangeHandler;
  width: number;
  height: number;
}>({
  onSelect: () => {},
  width: 150,
  height: 35,
});

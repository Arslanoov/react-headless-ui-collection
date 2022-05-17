import { createContext } from 'react';

export type OnChangeHandler = (index: number, isActive: boolean) => void;

export default createContext<OnChangeHandler>(() => {});

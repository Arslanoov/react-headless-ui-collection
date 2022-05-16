import { createContext } from "react";

export type OnChangeHandler = (value: string | null) => void;

export default createContext<OnChangeHandler>(() => {});

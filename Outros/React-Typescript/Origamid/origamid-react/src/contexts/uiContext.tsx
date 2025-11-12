import React from "react";

interface IUiContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UiContext = React.createContext<IUiContext | null>(null);

export const useUi = () => {
  const context = React.useContext(UiContext);
  if (context === null) throw new Error('useContext deve estar dentro do provider.')
  return context;
}
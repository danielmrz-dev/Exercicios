import React from "react";
import { UiContext } from "./uiContext";

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = React.useState(false);
  return (
    <UiContext.Provider value={{dark, setDark}}>
      {children}
    </UiContext.Provider>
  );
};
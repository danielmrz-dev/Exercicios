import React from "react";
import Header from "./Header";
import { UiContextProvider } from "./contexts/uiContextProvider";
import Content from "./Content";
import { UserContextProvider } from "./contexts/userContext";
import Input from "./Input";
import Form from "./Form";

function AppWithProvider() {
  return (
    <>
      <Form></Form>
    </>
  );
}

export default AppWithProvider;

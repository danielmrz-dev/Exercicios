import React from "react";
import Button from "./Button";

function App() {

  const [total, setTotal] = React.useState(0);

  function aumentar() {
    setTotal((total) => total + 1);
  }

  return (
    <>
      <p>Total: { total } </p>
      <Button onClick={aumentar}>
        Incrementar
      </Button>
    </>
  );
}

export default App;

import React from "react";

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

function Button4({ incrementar }: ButtonProps) {
  return (
    <button onClick={() => incrementar((n) => n + 1)}>Incrementar</button>
  );
}

export default Button4;

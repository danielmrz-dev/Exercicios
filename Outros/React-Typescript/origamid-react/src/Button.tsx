import React from "react";

type Props = React.ComponentProps<"button"> & {
  texto: string;
};

function Button({ onClick, children, ...props }: Props) {
  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

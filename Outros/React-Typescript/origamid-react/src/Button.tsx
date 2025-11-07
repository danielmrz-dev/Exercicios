import React from "react";

type Props = React.PropsWithChildren<{
  onClick: () => void;
}>;

function Button({ onClick, children }: Props) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;

import type { PropsWithChildren } from "react";
import "./Botao.css"

export const Botao = ({ children }: PropsWithChildren) => {
  return (
    <button className="botao">
      {children}
    </button>
  );
}

import React from "react";

type ColaboradorProps = {
  nome: string;
  cargo: string;
}

export const Colaborador: React.FC<ColaboradorProps> = ({ nome, cargo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src="https://github.com/danielmrz-dev.png" alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}

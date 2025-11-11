import React from "react";
import "./Colaborador.css";

type ColaboradorProps = {
  nome: string;
  cargo: string;
  avatar: string;
  bgColor: string;
  onDelete: (nome: string) => void
}

export const Colaborador: React.FC<ColaboradorProps> = ({ nome, cargo, avatar, bgColor, onDelete }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: bgColor }}>
        <img src={avatar} alt="" />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
      <button className="btn-deletar" onClick={() => onDelete(nome)}>✖️</button>
    </div>
  );
}

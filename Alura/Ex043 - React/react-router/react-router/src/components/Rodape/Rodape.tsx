import React from "react";
import s from "./Rodape.module.scss";
import img from "../../assets/imagens/marca_registrada.svg";

export const Rodape: React.FC = () => {
  return (
    <footer className={s.rodape}>
      <img src={img} alt="" />

      Desenvolvido por Daniel Mariz
    </footer>
  );
}

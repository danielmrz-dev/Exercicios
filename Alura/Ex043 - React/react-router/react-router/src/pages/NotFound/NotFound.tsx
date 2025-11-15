import React from "react";
import s from "./NotFound.module.scss";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.conteudoContainer}>
      <span className={s.texto040}></span>
      <h1 className={s.titulo}>Ops... página não encontrada</h1>
      <p className={s.parágrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed totam
        minima ipsum quas blanditiis minus saepe laborum perspiciatis quam
        aperiam.
      </p>
      <button className={s.botao} onClick={() => navigate(-1)}>
        Voltar
      </button>
    </div>
  );
};

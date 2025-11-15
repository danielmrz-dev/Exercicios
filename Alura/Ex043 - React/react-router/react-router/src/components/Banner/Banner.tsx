import React from "react";
import s from "./Banner.module.scss";
import circuloColorido from "../../assets/imagens/circulo_colorido.png";
import minhaFoto from "../../assets/imagens/minha_foto.png";

export const Banner: React.FC = () => {
  return (
    <div className={s.banner}>
      <div className={s.apresentacao}>
        <h1 className={s.titulo}>
          Olá, Mundoooo!!
        </h1>
        <p className={s.paragrafo}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laudantium illo similique tempora officiis aliquam. Corporis saepe facilis rem mollitia?
        </p>
      </div>
      <div className={s.imagens}>
        <img className={s.circuloColorido} src={circuloColorido} aria-hidden={true} />
        <img className={s.minhaFoto} src={minhaFoto} aria-hidden={true} />
      </div>
    </div>
  );
}

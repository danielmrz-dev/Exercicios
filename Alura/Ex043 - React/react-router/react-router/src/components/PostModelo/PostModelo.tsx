import React, { type PropsWithChildren } from "react";
import s from "./PostModelo.module.scss";

type PostModeloProps = {
  fotoCapa: string;
  titulo: string;
} & PropsWithChildren

export const PostModelo: React.FC<PostModeloProps> = ({ titulo, fotoCapa, children }) => {
  return (
    <article className={s.postModeloContainer}>
      <div
        className={s.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      />
      <h2 className={s.titulo}>{titulo}</h2>
      <div className={s.postConteudoContainer}>{children}</div>
    </article>
  );
};

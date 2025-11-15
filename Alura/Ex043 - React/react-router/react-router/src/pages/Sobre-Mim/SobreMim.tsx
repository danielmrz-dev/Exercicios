import React from "react";
import { PostModelo } from "../../components/PostModelo/PostModelo";
import capa from "../../assets/imagens/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/imagens/sobre_mim_foto.png";
import s from "./SobreMim.module.scss";

export const SobreMim: React.FC = () => {
  return (
    <PostModelo fotoCapa={capa} titulo="Título">
      <h3 className={s.subtitulo}>
        Olá, eu sou o Daniel!
      </h3>
      <img src={fotoSobreMim} alt="Foto sobre mim" className={s.fotoSobreMim} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate sequi nisi neque dolore totam maiores, magni doloribus fugit suscipit repudiandae excepturi deserunt obcaecati autem corrupti tempora nihil ratione dicta ea? Odit, at velit! Totam aspernatur corrupti temporibus deleniti architecto assumenda eius ducimus nulla accusantium obcaecati ullam doloremque, aperiam velit enim labore! Laudantium hic possimus saepe rem, sapiente minus! Asperiores, animi? Architecto, fugiat praesentium magnam quo voluptates, quae expedita similique adipisci id in perspiciatis aliquam eum dolorem voluptate! Earum impedit eius, enim perspiciatis quisquam ratione nisi facere cupiditate sed eligendi expedita culpa corrupti autem modi quos officia magni. Ex, laudantium!</p>
    </PostModelo>
  );
}

import React from "react";
import s from "./PostCard.module.scss";
import { Link } from "react-router-dom";

type PostCardProps = {
  post: {
    id: number;
    titulo: string;
    texto: string;
  };
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Link to={`posts/${post.id}`}>
      <div className={s.postCard}>
        <img
          src={`src/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
          className={s.capa}
        />
        <h2 className={s.titulo}>{post.titulo}</h2>
        <button className={s.botaoLer}>Ler</button>
      </div>    
    </Link>
  );
};

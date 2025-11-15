import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../assets/json/posts.json";
import { PostModelo } from "../../components/PostModelo/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.scss";
import { NotFound } from "../NotFound/NotFound";

export const Post: React.FC = () => {
  const params = useParams();
  const post = posts.find((p) => p.id === Number(params.id));

  if (!post) {
    return <NotFound/>
  }

  return (
    <PostModelo
      fotoCapa={`/src/assets/posts/${params.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </PostModelo>
  );
};

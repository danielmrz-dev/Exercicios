import React from "react";
import s from "./Inicio.module.scss";
import posts from "../../assets/json/posts.json";
import { PostCard } from "../../components/PostCard/PostCard";

export const Inicio: React.FC = () => {
  return (
    <ul className={s.posts}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
};

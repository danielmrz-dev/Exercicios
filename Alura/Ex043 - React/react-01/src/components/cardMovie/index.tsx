import type { Movie } from "../../types/movie.interface";
import { Tag } from "../tag";
import s from "./cardMovie.module.css";

const CardMovie = (props: Movie) => {
  const { alt, src, titulo, genero, categoria, censura, duracao } = props;
  return (
    <li className={s.card}>
      <img src={src} alt={alt} />
      <div className={s.container}>
        <h3>{titulo}</h3>
        <div className={s.informacoes}>
          <div className={s.linha1}>
            <p>{genero}</p>
            <Tag value={categoria} />
          </div>
          <div className={s.linha2}>
            <p>{duracao}</p>
            <Tag value={censura} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardMovie;

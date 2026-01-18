import type { Movie } from "../../types/movie.interface";
import CardMovie from "../cardMovie";
import s from "./movieList.module.css";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={s.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movie} />
      ))}
    </ul>
  );
};

export default MovieList;

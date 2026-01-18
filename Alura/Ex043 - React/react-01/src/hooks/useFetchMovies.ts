import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { getMovies } from "../api";
import type { Movie } from "../types/movie.interface";

export const useFetchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const moviesList = await getMovies();
        setMovies(moviesList);
      } catch (erro) {
        if (erro instanceof AxiosError) {
          alert(`Houve um erro ao buscar a lista de filmes. ${erro.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, isLoading };
};

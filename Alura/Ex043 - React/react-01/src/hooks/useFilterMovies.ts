import { useState, useEffect } from "react";
import type { Movie } from "../types/movie.interface";

export const useFilterMovies = (movies: Movie[]) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredMovies, setfilteredMovies] = useState<Movie[]>([]);


  useEffect(() => {
    setfilteredMovies(movies)
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) => {
      return movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    });
    setfilteredMovies(filtered);
  }

  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
};

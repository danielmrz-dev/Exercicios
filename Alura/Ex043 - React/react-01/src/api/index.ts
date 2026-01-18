import axios from "axios"
import type { Movie } from "../types/movie.interface";

const BASE_URL = "http://localhost:3001"

export const getMovies = async (): Promise<Movie[]> => {
  const { data } = await axios.get<Movie[]>(`${BASE_URL}/movies`);
  return data;
}
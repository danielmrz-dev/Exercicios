import { FaSearch } from "react-icons/fa";
import { Button } from "../button";
import { Fieldset } from "../fieldset";
import { InputText } from "../inputText";
import s from "./movieSection.module.css";
import MovieList from "../movieList";
import { useFetchMovies } from "../../hooks/useFetchMovies";
import { useFilterMovies } from "../../hooks/useFilterMovies";

export const MovieSection = () => {
  const { movies, isLoading } = useFetchMovies();
  const { searchTerm, filteredMovies, handleSearch, setSearchTerm } = useFilterMovies(movies)

  return (
    <main>
      <section className={s.container}>
        <Fieldset variant="secondary">
          <InputText 
            placeholder="Buscar filmes..." 
            value={searchTerm}
            onChange={({ target }) => {
              setSearchTerm(target.value)
              handleSearch()
            }}
          />
          <Button variant="icon" >
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={s.titulo}>Em cartaz</h1>
        {
          isLoading
            ? <h3>Carregando lista de filmes...</h3>
            : (
                movies.length > 0
                  ? <MovieList movies={filteredMovies} />
                  : <h3>Não há filmes em cartaz.</h3>
              )
        }
        
      </section>
    </main>
  );
};

package br.com.alura.screenmatch.repository;

import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Episodio;
import br.com.alura.screenmatch.model.Serie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface SerieRepository extends JpaRepository<Serie, Long> {
  Optional<Serie> findByTituloContainingIgnoreCase(String nomeSerie);
  List<Serie> findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(String ator, Double avaliacao);
  List<Serie> findTop5ByOrderByAvaliacaoDesc();
  List<Serie> findByGenero(Categoria genero);

  @Query("SELECT s FROM Serie s WHERE s.totalTemporadas <= 5 AND s.avaliacao >= 7.5")
  List<Serie> seriesPorTemporadaEAvaliacao();

  @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE e.titulo ILIKE %:trecho%")
  List<Episodio> buscarEpisodioPorTrecho(String trecho);

  @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie ORDER BY e.avaliacao DESC LIMIT 5")
  List<Episodio> topEpisodiosPorSerie(Serie serie);

  @Query("SELECT e FROM Serie s JOIN s.episodios e WHERE s = :serie AND YEAR(e.dataLancamento) >= :data")
  List<Episodio> buscarEpisodioPorData(Serie serie, Integer data);
}

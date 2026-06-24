package br.com.alura.screenmatch.service;

import br.com.alura.screenmatch.dto.EpisodioDTO;
import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Episodio;
import br.com.alura.screenmatch.model.Serie;
import br.com.alura.screenmatch.repository.SerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class SerieService {

  @Autowired
  private SerieRepository repository;

  public List<SerieDTO> obterSeries() {
    return converteParaSerieDTO(repository.findAll());
  }

  public List<SerieDTO> obterTop5Series() {
    return converteParaSerieDTO(repository.findTop5ByOrderByAvaliacaoDesc());
  }

  public List<SerieDTO> obterSeriesPorCategoria(String categoria) {
    return converteParaSerieDTO(repository.findByGenero(Categoria.fromPortugues(categoria)));
  }

  public List<SerieDTO> obterLancamentos() {
    return converteParaSerieDTO(repository.findTop5ByOrderByAvaliacaoDesc());
  }



  private List<SerieDTO> converteParaSerieDTO(List<Serie> series) {
    return series.stream()
      .map(s -> new SerieDTO(
        s.getId(),
        s.getTitulo(),
        s.getTotalTemporadas(),
        s.getAvaliacao(),
        s.getGenero(),
        s.getAtores(),
        s.getPoster(),
        s.getSinopse()))
      .collect(Collectors.toList());
  }


  public SerieDTO buscarSeriePorId(Long id) {
    Optional<Serie> serie = repository.findById(id);
    if (serie.isPresent()) {
      Serie serieEncontrada = serie.get();
      return new SerieDTO(
        serieEncontrada.getId(),
        serieEncontrada.getTitulo(),
        serieEncontrada.getTotalTemporadas(),
        serieEncontrada.getAvaliacao(),
        serieEncontrada.getGenero(),
        serieEncontrada.getAtores(),
        serieEncontrada.getPoster(),
        serieEncontrada.getSinopse()
      );
    }
    return null;
  }

  public List<EpisodioDTO> buscarTemporadasPorSerie(Long id) {
    Optional<Serie> serie = repository.findById(id);
    if (serie.isPresent()) {
      List<Episodio> episodios = serie.get().getEpisodios();
      return episodios.stream()
          .map(e -> new EpisodioDTO(
            e.getTemporada(),
            e.getTitulo(),
            e.getNumeroEpisodio())
          )
        .collect(Collectors.toList());
    }
    return null;
  }

  public List<EpisodioDTO> buscarEpisodiosPorTemporada(Long id, Long numeroTemporada) {
    List<Episodio> episodios = repository.episodiosPorTemporada(id, numeroTemporada);
    return episodios.stream()
      .map(e -> new EpisodioDTO(
        e.getTemporada(),
        e.getTitulo(),
        e.getNumeroEpisodio()
      )).collect(Collectors.toList());
  }
}

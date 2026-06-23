package br.com.alura.screenmatch.service;

import br.com.alura.screenmatch.dto.SerieDTO;
import br.com.alura.screenmatch.model.Categoria;
import br.com.alura.screenmatch.model.Serie;
import br.com.alura.screenmatch.repository.SerieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
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



}

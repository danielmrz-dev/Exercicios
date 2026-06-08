package br.com.danielmrz.screenmatch.principal;

import br.com.danielmrz.screenmatch.model.DadosEpisodio;
import br.com.danielmrz.screenmatch.model.DadosSerie;
import br.com.danielmrz.screenmatch.model.DadosTemporada;
import br.com.danielmrz.screenmatch.services.ConsumoApi;
import br.com.danielmrz.screenmatch.services.ConverteDados;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Principal {
  Scanner leitura = new Scanner(System.in);
  private final String ENDERECO = "http://www.omdbapi.com/?t=";
  private final String API_KEY = "&apikey=123805e8";
  private final ConsumoApi consumoApi = new ConsumoApi();
  private final ConverteDados conversor = new ConverteDados();

  public void exibeMenu() {
    System.out.println("Digite o nome da série:");
    var nomeSerie = leitura.nextLine();
    var json = consumoApi.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
    DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
    System.out.println(dados);

    List<DadosTemporada> temporadas = new ArrayList<>();
    for (int i = 1; i <= dados.totalTemporadas(); i++) {
      json = consumoApi.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + "&Season=" + i + API_KEY);
      DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
      temporadas.add(dadosTemporada);
    }

    temporadas.forEach(System.out::println);

//    for (int i = 0; i < dados.totalTemporadas(); i++) {
//      List<DadosEpisodio> episodiosTemporada = temporadas.get(i).episodios();
//      for (int j = 0; j < episodiosTemporada.size(); j++) {
//        System.out.println(episodiosTemporada.get(j).titulo());
//      }
//    }

    temporadas.forEach(t -> t.episodios().forEach(e -> System.out.println(e.titulo())));
  }
}

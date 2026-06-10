package br.com.danielmrz.screenmatch.principal;

import br.com.danielmrz.screenmatch.model.DadosEpisodio;
import br.com.danielmrz.screenmatch.model.DadosSerie;
import br.com.danielmrz.screenmatch.model.DadosTemporada;
import br.com.danielmrz.screenmatch.model.Episodio;
import br.com.danielmrz.screenmatch.services.ConsumoApi;
import br.com.danielmrz.screenmatch.services.ConverteDados;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

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

//    temporadas.forEach(System.out::println);

//    for (int i = 0; i < dados.totalTemporadas(); i++) {
//      List<DadosEpisodio> episodiosTemporada = temporadas.get(i).episodios();
//      for (int j = 0; j < episodiosTemporada.size(); j++) {
//        System.out.println(episodiosTemporada.get(j).titulo());
//      }
//    }

//    temporadas.forEach(t -> t.episodios().forEach(e -> System.out.println(e.titulo())));

    List<DadosEpisodio> dadosEpisodios = temporadas.stream()
      .flatMap(dadosTemporada -> dadosTemporada.episodios().stream())
      .toList();

//    System.out.println("Top 10 episódios ⬇️");
//    dadosEpisodios.stream()
//      .filter(e -> !e.avaliacao().equalsIgnoreCase("N/A"))
//      .peek(e -> System.out.println("Espiando..." + e))
//      .sorted(Comparator.comparing(DadosEpisodio::avaliacao).reversed())
//      .limit(10)
//      .map(e -> e.titulo().toUpperCase())
//      .forEach(System.out::println);

    List<Episodio> episodios = temporadas.stream()
      .flatMap(temporada -> temporada.episodios().stream()
        .map(episodio -> new Episodio(temporada.numero(), episodio))).collect(Collectors.toList());

//    episodios.forEach(System.out::println);
//
//    System.out.println("Digite um trecho do episódio para buscar: ");
//    var trechoBusca = leitura.nextLine();

//    Optional<Episodio> episodioBuscado = episodios.stream()
//      .filter(e -> e.getTitulo().toLowerCase().contains(trechoBusca.toLowerCase()))
//      .findFirst();
//
//    if (episodioBuscado.isPresent()) {
//      System.out.println(episodioBuscado);
//    } else {
//      System.out.println("Episódio não encontrado!");
//    }

    Map<Integer, Double> avaliacoesPorTemporada = episodios.stream()
      .filter(e -> e.getAvaliacao() > 0.0)
      .collect(Collectors.groupingBy(Episodio::getNumeroTemporada, Collectors.averagingDouble(Episodio::getAvaliacao)));

    System.out.println(avaliacoesPorTemporada);

    DoubleSummaryStatistics est = episodios.stream()
      .filter(e -> e.getAvaliacao() > 0.0)
      .collect(Collectors.summarizingDouble(Episodio::getAvaliacao));

    System.out.printf("""
      Estatísticas
      Média: %s
      Melhor episódio: %s
      Pior episódio: %s
      Quantidade: %d
      %n""", est.getAverage(), est.getMax(), est.getMin(), est.getCount());
//
//    System.out.println("A partir de que ano você deseja ver os episódios?");
//    var ano = leitura.nextInt();
//    leitura.nextLine();
//
//    LocalDate dataBusca = LocalDate.of(ano, 1,1);
//
//    DateTimeFormatter formatador = DateTimeFormatter.ofPattern("dd/MM/yyyy");
//
//    episodios.stream()
//      .filter(episodio -> episodio.getDataLancamento() != null && episodio.getDataLancamento().isAfter(dataBusca))
//      .forEach(e -> System.out.println(
//        "Temporada: " + e.getNumeroTemporada() + " - " +
//        "Episódio: " + e.getTitulo() + " - " +
//        "Data de lançamento: " + e.getDataLancamento().format(formatador)
//      ));


  }
}

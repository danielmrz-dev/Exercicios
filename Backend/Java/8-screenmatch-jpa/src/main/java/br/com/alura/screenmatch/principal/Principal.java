package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.*;
import br.com.alura.screenmatch.repository.SerieRepository;
import br.com.alura.screenmatch.service.ConsumoApi;
import br.com.alura.screenmatch.service.ConverteDados;

import java.util.*;

public class Principal {

  private final Scanner leitura = new Scanner(System.in);
  private final ConsumoApi consumo = new ConsumoApi();
  private final ConverteDados conversor = new ConverteDados();
  private final String ENDERECO = "https://www.omdbapi.com/?t=";
  private final String API_KEY = "&apikey=123805e8";
  private List<DadosSerie> dadosSeries = new ArrayList<>();
  private final SerieRepository repository;
  private List<Serie> series = new ArrayList<>();

  public Principal(SerieRepository serieRepository) {
    this.repository = serieRepository;
  }

  public void exibeMenu() {
      var opcao = -1;

      while(opcao != 0) {
        var menu = """
                1 - Buscar séries
                2 - Buscar episódios
                3 - Listar séries buscadas
                4 - Buscar série por nome
                5 - Buscar série por ator/atriz
                6 - Buscar as top 5 séries
                7 - Buscar séries por gênero
                0 - Sair
                """;

        System.out.println(menu);
        opcao = leitura.nextInt();
        leitura.nextLine();

        switch (opcao) {
            case 1:
                buscarSerieWeb();
                break;
            case 2:
                buscarEpisodioPorSerie();
                break;
            case 3:
                listarSeriesBuscadas();
                break;
            case 4:
                buscarSeriePorTitulo();
                break;
            case 5:
                buscaSeriePorAtores();
                break;
            case 6:
                buscaTop5Series();
                break;
            case 7:
                buscaSeriesPorGenero();
                break;
            case 0:
                System.out.println("Saindo...");
                break;
            default:
                System.out.println("Opção inválida");
        }
      }
    }

  private void buscaSeriesPorGenero() {
    System.out.println("Qual o gênero?");
    var genero = leitura.nextLine();
    Categoria categoria = Categoria.fromStringPtBr(genero);
    List<Serie> seriesPorGenero = repository.findByGenero(categoria);
    if (!seriesPorGenero.isEmpty()) {
      System.out.println("Séries do gênero " + genero);
      seriesPorGenero.forEach(System.out::println);
    } else {
      System.out.println("Não há séries salvas deste gênero.");
    }
  }

  private void buscaTop5Series() {
    List<Serie> topSeries = repository.findTop5ByOrderByAvaliacaoDesc();
    System.out.println("Top 5 séries:");
    topSeries.forEach(s -> System.out.println("Série: " + s.getTitulo() + " - Avaliação: " + s.getAvaliacao()));
  }

  private void buscaSeriePorAtores() {
    System.out.println("Digite o nome do ator ou atriz:");
    var nome = leitura.nextLine();
    System.out.println("Digite a nota de avaliação:");
    var nota = leitura.nextDouble();

    List<Serie> seriesBuscadas = repository.findByAtoresContainingIgnoreCaseAndAvaliacaoGreaterThanEqual(nome, nota);

    if (!seriesBuscadas.isEmpty()) {
      System.out.println("O ator " + nome + " participou das seguintes séries: ");
      seriesBuscadas.forEach(System.out::println);
    } else {
      System.out.println("Não há séries salvas nas quais o ator/atriz " + nome + " tenha participado.");
    }
  }


  private void buscarSerieWeb() {
    DadosSerie dados = getDadosSerie();
    Serie serie = new Serie(dados);
    repository.save(serie);
    System.out.println(dados);
  }

  private void listarSeriesBuscadas() {
    series = repository.findAll();
    System.out.println("Lista das séries buscadas:" + "\n");
    series.stream()
      .sorted(Comparator.comparing(Serie::getGenero))
      .forEach(System.out::println);
  }

  private DadosSerie getDadosSerie() {
    System.out.println("Digite o nome da série para busca");
    var nomeSerie = leitura.nextLine();
    var json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
    return conversor.obterDados(json, DadosSerie.class);
  }

  private void buscarEpisodioPorSerie(){
      System.out.println("Escolha uma das séries pelo nome:");
      listarSeriesBuscadas();
      var nomeSerie = leitura.nextLine();

      Optional<Serie> serieBuscada = repository.findByTituloContainingIgnoreCase(nomeSerie);

      if (serieBuscada.isPresent()) {
        var serie = serieBuscada.get();
        List<DadosTemporada> temporadas = new ArrayList<>();
        for (int i = 1; i <= serie.getTotalTemporadas(); i++) {
          var json = consumo.obterDados(ENDERECO + serie.getTitulo().replace(" ", "+") + "&season=" + i + API_KEY);
          DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
          temporadas.add(dadosTemporada);
        }
        temporadas.forEach(System.out::println);

        List<Episodio> episodios = temporadas.stream()
          .flatMap(d -> d.episodios().stream()
            .map(e -> new Episodio(d.numero(), e))).toList();

        serie.setEpisodios(episodios);
        repository.save(serie);

      } else {
        System.out.println("Série não encontrada.");
      }

  }

  private void buscarSeriePorTitulo() {
    System.out.println("Digite o nome da série:");
    var nomeSerie = leitura.nextLine();

    Optional<Serie> serieBuscada = repository.findByTituloContainingIgnoreCase(nomeSerie);

    if (serieBuscada.isPresent()) {
      System.out.println("Dados da série: " + serieBuscada.get());
    } else {
      System.out.println("Série não encontrada");
    }
  }
}
package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.model.DadosEpisodio;
import br.com.alura.screenmatch.model.DadosSerie;
import br.com.alura.screenmatch.model.DadosTemporada;
import br.com.alura.screenmatch.model.Episodios;
import br.com.alura.screenmatch.services.ConsumoApi;
import br.com.alura.screenmatch.services.ConverteDados;

import java.util.*;
import java.util.stream.Collectors;

public class Principal {

    public Scanner leitura = new Scanner(System.in);
    private ConsumoApi consumo = new ConsumoApi();
    private ConverteDados conversor = new ConverteDados();

    private final String ENDERECO = "https://www.omdbapi.com/?t=";
    private final String API_KEY = "&apikey=6585022c";

    public void exibeMenu() {
        System.out.println("Digite o nome da série para buscar:");
        var nomeSerie = leitura.nextLine();
        var json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + API_KEY);
        DadosSerie dados = conversor.obterDados(json, DadosSerie.class);
        System.out.println(dados);
        List<DadosTemporada> temporadas = new ArrayList<>();

		for (int i = 1; i <= dados.totalTemporadas(); i++) {
			json = consumo.obterDados(ENDERECO + nomeSerie.replace(" ", "+") + "&season=" + i + API_KEY);
			DadosTemporada dadosTemporada = conversor.obterDados(json, DadosTemporada.class);
			temporadas.add(dadosTemporada);
		}

//		temporadas.forEach(System.out::println);
//        temporadas.forEach(
//t -> t.episodios().forEach(
//    e -> System.out.println(e.titulo()
//                )
//            )
//        );

//        List<String> nomes = Arrays.asList("Daniel", "Ana", "Flor", "Foggy");
//        nomes.stream()
//                .sorted()
//                .limit(3)
//                .filter(n -> n.startsWith("A"))
//                .map(String::toLowerCase)
//                .forEach(n -> System.out.println("Olá " + n + "!"));

        List<DadosEpisodio> dadosEpisodios = temporadas.stream()
                .flatMap(t -> t.episodios().stream())
                .toList();

        dadosEpisodios.stream()
                .filter(e -> !e.avaliacao().equalsIgnoreCase("N/A"))
                .sorted(Comparator.comparing(DadosEpisodio::avaliacao).reversed())
                .limit(5)
                .forEach(System.out::println);

        List<Episodios> episodios = temporadas.stream()
                .flatMap(t -> t.episodios().stream()
                        .map(d -> new Episodios(t.numero(), d)))
                .collect(Collectors.toList());

        episodios.forEach(System.out::println);
    }

}

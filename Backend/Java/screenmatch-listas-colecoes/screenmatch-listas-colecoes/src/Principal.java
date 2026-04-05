import br.com.alura.screenmatch.calculos.CalculadoraDeTempo;
import br.com.alura.screenmatch.calculos.FiltroRecomendacao;
import br.com.alura.screenmatch.modelos.Episodio;
import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;

import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
//        Filme meuFilme = new Filme();
//        meuFilme.setNome("O poderoso chefão");
//        meuFilme.setAnoDeLancamento(1970);
//        meuFilme.setDuracaoEmMinutos(180);
//        System.out.println("Duração do filme: " + meuFilme.getDuracaoEmMinutos());
//
//        meuFilme.exibeFichaTecnica();
//        meuFilme.avalia(8);
//        meuFilme.avalia(5);
//        meuFilme.avalia(10);
//        System.out.println("Total de avaliações: " + meuFilme.getTotalDeAvaliacoes());
//        System.out.println(meuFilme.pegaMedia());
//
//        Serie lost = new Serie();
//        lost.setNome("Lost");
//        lost.setAnoDeLancamento(2000);
//        lost.exibeFichaTecnica();
//        lost.setTemporadas(10);
//        lost.setEpisodiosPorTemporada(10);
//        lost.setMinutosPorEpisodio(50);
//        System.out.println("Duração para maratonar Lost: " + lost.getDuracaoEmMinutos());
//
//        Filme outroFilme = new Filme();
//        outroFilme.setNome("Avatar");
//        outroFilme.setAnoDeLancamento(2023);
//        outroFilme.setDuracaoEmMinutos(200);
//
//        CalculadoraDeTempo calculadora = new CalculadoraDeTempo();
//        calculadora.inclui(meuFilme);
//        calculadora.inclui(outroFilme);
//        calculadora.inclui(lost);
//        System.out.println(calculadora.getTempoTotal());
//
//        FiltroRecomendacao filtro = new FiltroRecomendacao();
//        filtro.filtra(meuFilme);
//
//        Episodio episodio = new Episodio();
//        episodio.setNumero(1);
//        episodio.setSerie(lost);
//        episodio.setTotalVisualizacoes(300);
//        filtro.filtra(episodio);

        Filme filmeDoDaniel = new Filme("Attack on Titan", 2020);
        filmeDoDaniel.setDuracaoEmMinutos(200);
        filmeDoDaniel.avalia(10);

        Filme filmeDaAna = new Filme("Cisne Negro", 2022);
        filmeDaAna.setDuracaoEmMinutos(200);
        filmeDaAna.avalia(10);

        Serie serieDoDaniel = new Serie("Breaking Bad", 2020);
        serieDoDaniel.setDuracaoEmMinutos(200);
        serieDoDaniel.avalia(10);

        Serie serieDaAna = new Serie("Little Fires Everywhere", 2022);
        serieDaAna.setDuracaoEmMinutos(200);
        serieDaAna.avalia(10);

        ArrayList<Filme> filmes = new ArrayList<>();
        ArrayList<Serie> series = new ArrayList<>();

        filmes.add(filmeDoDaniel);
        filmes.add(filmeDoDaniel);
        series.add(serieDaAna);
        series.add(serieDaAna);

        System.out.println(filmes);
        System.out.println(series);


    }
}
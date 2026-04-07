package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.modelos.Filme;
import br.com.alura.screenmatch.modelos.Serie;
import br.com.alura.screenmatch.modelos.Titulo;

import java.util.ArrayList;
import java.util.Collections;

public class PrincipalComListas {
  public static void main(String[] args) {
    Filme filmeDoDaniel = new Filme("Attack on Titan", 2020);
    filmeDoDaniel.avalia(9);
    Filme filmeDaAna = new Filme("Cisne Negro", 2022);
    filmeDaAna.avalia(10);
    Serie serieDoDaniel = new Serie("Breaking Bad", 2020);
    serieDoDaniel.avalia(8.5);
    Serie serieDaAna = new Serie("Little Fires Everywhere", 2022);
    serieDaAna.avalia(9.5);

    ArrayList<Titulo> assistidos = new ArrayList<>();

    assistidos.add(filmeDoDaniel);
    assistidos.add(filmeDaAna);
    assistidos.add(serieDoDaniel);
    assistidos.add(serieDaAna);

//    for (Titulo item : assistidos) {
//      if (item instanceof Filme filme) {
//        System.out.printf("""
//          Categoria: Filme
//          Nome: %s
//          Ano de lançamento: %d
//          Classificação: %s
//          %n""", item.getNome(), item.getAnoDeLancamento(), filme.getClassificacao()
//        );
//      } else {
//        System.out.printf("""
//          Categoria: Série
//          Nome: %s
//          Ano de lançamento: %d
//          Média de avaliação: %s
//          %n""", item.getNome(), item.getAnoDeLancamento(), item.pegaMedia()
//        );
//      }
//    }

    ArrayList<String> buscaPorArtista = new ArrayList<>();
    buscaPorArtista.add("Anitta");
    buscaPorArtista.add("Red hot");
    buscaPorArtista.add("Linkin Park");
    buscaPorArtista.add("Cannons");

    System.out.println("Antes da ordenação => " + buscaPorArtista);

    Collections.sort(buscaPorArtista);
    System.out.println("Depois da ordenação => " + buscaPorArtista);

    System.out.println("Assistidos => " + assistidos);
    Collections.sort(assistidos);
    System.out.println("Assistidos => " + assistidos);
  }
}

package org.example;

import br.com.mrz.screenmatch.models.Filme;
import br.com.mrz.screenmatch.models.Serie;

public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World!");

    Filme meufilme = new Filme();
    meufilme.setNome("Truque de Mestre");
    meufilme.setAnoDeLancamento(2023);
    meufilme.setDuracaoEmMinutos(120);

    meufilme.avalia(10);
    meufilme.avalia(8.5);
    meufilme.avalia(7.3);
    meufilme.avalia(4);

    // meufilme.exibirFichaTecnica();
//    System.out.println(meufilme.obterMediaDeAvaliacoes());

    Serie lost = new Serie();
    lost.setNome("Lost");
    lost.setTemporadas(6);
    lost.setEpisodiosPorTemporada(22);

    lost.exibirFichaTecnica();


  }
}

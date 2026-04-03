package org.example;

import java.util.ArrayList;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    System.out.println("Este é o ScreenMatch!");
    System.out.println("Filme: Attack on Titan!");

    int year = 2025;
    System.out.println("O ano de lançamento é " + year);

    boolean estaIncluso = Math.random() > .5;
    System.out.println("Está incluso no catálogo: " + (estaIncluso ? "Sim." : "Não."));

    List<Double> notas = new ArrayList<Double>();
    notas.add(10.0);
    notas.add(3.0);
    double avaliacaoMedia = notas.stream()
      .mapToDouble(Double::doubleValue)
      .average()
      .orElse(0.0);
    System.out.println("Avaliação: " + String.format("%.2f", avaliacaoMedia));

    int estrelas = (int) (avaliacaoMedia / 2);

    String sinopse = "Filme de Titãs";
    System.out.println("Sinopse: " + sinopse);
    System.out.println("Classificação: " + estrelas);
  }
}

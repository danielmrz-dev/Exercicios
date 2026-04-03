package org.example;

public class Condicional {
  public static void main(String[] args) {
    int ano = 2025;
    boolean estaIncluso = Math.random() > .5;
    double nota = 8.5;
    String topoDoPlano = "normal";

    if (ano >= 2022) {
      System.out.println("Filme recente!");
    } else {
      System.out.println("Filme retrô!");
    }

    if (estaIncluso && topoDoPlano.equals("plus")) {
      System.out.println("Você pode assistir.");
    } else {
      System.out.println("Alugue ou compre.");
    }

  }
}

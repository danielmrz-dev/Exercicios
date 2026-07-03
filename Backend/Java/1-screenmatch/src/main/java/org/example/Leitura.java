package org.example;

import java.util.Scanner;

public class Leitura {
  public static void main(String[] args) {
    Scanner leitura = new Scanner(System.in);

    System.out.println("Qual é o seu filme favorito?");
    String filme = leitura.nextLine();

    System.out.println("Qual é o ano de lançamento do filme " + filme + "?");
    int ano = leitura.nextInt();

    System.out.println("Qual nota você dá para o filme " + filme + "?");
    double nota = leitura.nextDouble();

    System.out.println("O filme que você escolheu foi " + filme + " e o ano de lançamento dele é " + ano + ", e a sua nota para ele é " + nota + ".");


  }
}

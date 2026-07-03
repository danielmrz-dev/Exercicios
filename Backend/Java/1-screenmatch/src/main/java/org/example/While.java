package org.example;

import java.util.Scanner;

public class While {

  public static void main(String[] args) {
    Scanner leitura = new Scanner(System.in);
    double nota = 0;
    double avaliacao = 0;
    int quantidadeDeNotas = 0;

    while (quantidadeDeNotas < 5) {
      System.out.println("Qual nota você dá para o filme ?");
      nota = leitura.nextDouble();
      avaliacao += nota;
      quantidadeDeNotas++;
    }

    System.out.println("Média: " + avaliacao / quantidadeDeNotas);
  }
}

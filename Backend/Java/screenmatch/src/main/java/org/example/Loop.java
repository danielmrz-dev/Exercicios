package org.example;

import java.util.Scanner;

public class Loop {
  public static void main(String[] args) {
    Scanner leitura = new Scanner(System.in);
    double nota = 0;
    double avaliacao = 0;
    int quantidadeDeNotas = 5;

    for (int i = 0; i < quantidadeDeNotas; i++) {
      System.out.println("Qual nota você dá para o filme ?");
      nota = leitura.nextDouble();
      avaliacao += nota;
    }

    System.out.println("Média: " + avaliacao / quantidadeDeNotas);
  }
}

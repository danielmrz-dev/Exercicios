package org.example;

import java.util.Scanner;

public class Desafio {
  public static void main(String[] args) {
    String nome = "Daniel Mariz";
    int idade = 35;
    double saldo = 9500.50;
    String tipoDeConta = "Corrente";

    Scanner leitor = new Scanner(System.in);


    String cabecalho =
      """
        ****************************************
        Dados do cliente logado:
        Nome: %s
        Idade: %d anos
        Saldo: R$ %.2f
        Tipo de conta: %s
        ****************************************
        """.formatted(nome, idade, saldo, tipoDeConta);
    System.out.println(cabecalho);

    String menu =
      """
        Escolha uma opção:
        
        1 - Consultar saldo
        2 - Receber valores
        3 - Transferir valor
        4 - Sair
        
        """;

    System.out.println(menu);
    int opcaoEscolhida = leitor.nextInt();

    while (opcaoEscolhida <= 4) {
      switch (opcaoEscolhida) {
        case 1:
          System.out.println("Seu saldo atual é de: " + saldo);
          System.out.println(menu);
          opcaoEscolhida = leitor.nextInt();
          break;
        case 2:
          System.out.println("Qual valor deseja receber?");
          double valorAReceber = leitor.nextDouble();
          saldo += valorAReceber;
          System.out.println("Valor recebido. Seu saldo atualizado é: " + saldo);
          System.out.println(menu);
          opcaoEscolhida = leitor.nextInt();
          break;
        case 3:
          System.out.println("Qual valor deseja transferir?");
          double valorATransferir = leitor.nextDouble();
          saldo -= valorATransferir;
          System.out.println("Transferência realizada. Seu saldo atualizado é: " + saldo);
          System.out.println(menu);
          opcaoEscolhida = leitor.nextInt();
          break;
        case 4:
          opcaoEscolhida = 5;
          System.out.println("Saindo...");
          break;
      }
    }

    System.out.println("Seu atendimento foi encerrado.");

  }
}

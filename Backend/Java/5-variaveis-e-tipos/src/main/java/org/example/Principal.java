package org.example;

/**
 * Hello world!
 *
 */
public class Principal {
    public static void main( String[] args ) {
      int quantidadeDePassos = 500;
      double altura = 1.80;
      Paciente paciente = new Paciente("Daniel", 1.80, 88.50, 'm');

//      int alturaEmCm = (int) (altura * 100);
//      int alturaEmCm2 = 180;
//      altura = alturaEmCm2;

//      if (quantidadeDePassos > 1000) {
//        String sugestao = "Aumenta aí!!";
//        System.out.println(sugestao);
//      }

      String[] vendedores = {"Daniel", "Ana"};
      double[] vendas = {4000, 6000};

      for (int i = 0; i < vendedores.length; i++) {
        System.out.println("A comissão do vendedor " + vendedores[i] + " é de " + calcularComissao(vendas[i]) + " reais.");
      }



    }

    public static double calcularComissao(double totalDeVendas) {
      if (totalDeVendas <= 5000) {
        return totalDeVendas * 0.03;
      } else if (totalDeVendas <= 1000) {
        return totalDeVendas * 0.05;
      } else {
        return totalDeVendas * 0.07;
      }
    }
}

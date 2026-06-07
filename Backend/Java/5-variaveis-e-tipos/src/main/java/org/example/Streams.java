package org.example;

import java.util.List;
import java.util.stream.Collectors;

public class Streams {
  public static void main(String[] args) {
    List<String> colaboradores = List.of("Ana", "Daniel", "Gercino", "Florzina");

    List<String> colaboradoresComA = colaboradores.stream()
      .filter(funcionario -> funcionario.startsWith("A"))
      .collect(Collectors.toList());

    List<String> colaboradoresMinusculos = colaboradores.stream()
      .map(String::toUpperCase)
      .collect(Collectors.toList());

//    System.out.println(colaboradores);
//    System.out.println(colaboradoresComA);
//    System.out.println(colaboradoresMinusculos);

    List<Double> valores = List.of(20.5, 30.0);
    double valoresDobro = valores.stream()
      .reduce(0.0, Double::sum);

    System.out.println(valores);
    System.out.println(valoresDobro);


  }
}

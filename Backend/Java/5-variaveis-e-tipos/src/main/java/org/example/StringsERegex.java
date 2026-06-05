package org.example;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringsERegex {
  public static void main(String[] args) {
    String professor = "Alberto";
    String disciplina = "Arquitetura de software";
    String curriculo = """
      Professor: %s
      Pós Graduado em Engenharia de Software
      Desenvolvedor Backend desde 2015
      """.formatted(professor);

//    System.out.printf("Nome: %s", professor);

    String email = "daniel@ana.com";
    Pattern pattern = Pattern.compile("\\w+@\\w+.\\w+");
    Matcher matcher = pattern.matcher(email);

    if (matcher.find()) {
      System.out.println(matcher.group());
    } else {
      System.out.println("Não há registros compatíveis com a expressão regular.");
    }
  }
}

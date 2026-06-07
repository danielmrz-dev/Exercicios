package org.example;

import java.util.*;

public class Listas {
  public static void main(String[] args) {

    List<String> funcionarios = new ArrayList<>();
    funcionarios.add("Daniel");
    funcionarios.add("Ana");
    funcionarios.add("João");
    funcionarios.add("João");

//    System.out.println(funcionarios);

    Set<String> amigos = new HashSet<>();
    amigos.add("Daniel");
    amigos.add("Ana");
    amigos.add("João");

//    System.out.println(amigos);

    Map<Integer, String> pets = new HashMap<>();
    pets.put(1, "Bilu");
    pets.put(2, "Foggy");

    System.out.println(pets);
  }

}

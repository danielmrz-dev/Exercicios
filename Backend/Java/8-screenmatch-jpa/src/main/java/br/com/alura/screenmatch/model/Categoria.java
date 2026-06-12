package br.com.alura.screenmatch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Arrays;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public enum Categoria {
  ACAO("Action"),
  ROMANCE("Romance"),
  COMEDIA("Comedy"),
  DRAMA("Drama"),
  CRIME("Crime"),
  BIOGRAFIA("Biography"),
  AVENTURA("Adventure"),
  FANTASIA("Fantasy");

  private String categoriaOmdb;

  Categoria(String categoriaOmdb) {
    this.categoriaOmdb = categoriaOmdb;
  }

  public static Categoria fromString(String text) {
    for (Categoria categoria : Categoria.values()) {
      if (categoria.categoriaOmdb.equalsIgnoreCase(text)) {
        return categoria;
      }
    }
    throw new IllegalArgumentException("Nenhuma categoria correspondente para o texto => " + text + ".");
  }
}

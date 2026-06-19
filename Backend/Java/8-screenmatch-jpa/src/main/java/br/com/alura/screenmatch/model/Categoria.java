package br.com.alura.screenmatch.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public enum Categoria {
  ACAO("Action", "Ação"),
  ROMANCE("Romance", "Romance"),
  COMEDIA("Comedy", "Comédia"),
  DRAMA("Drama", "Drama"),
  CRIME("Crime", "Crime"),
  BIOGRAFIA("Biography", "Biografia"),
  AVENTURA("Adventure", "Aventura"),
  FANTASIA("Fantasy", "Fantasia");

  private String categoriaOmdb;
  private String categoriaEmPtBr;

  Categoria(String categoriaOmdb, String categoriaEmPtBr) {
    this.categoriaOmdb = categoriaOmdb;
    this.categoriaEmPtBr = categoriaEmPtBr;
  }

  public static Categoria fromString(String text) {
    for (Categoria categoria : Categoria.values()) {
      if (categoria.categoriaOmdb.equalsIgnoreCase(text)) {
        return categoria;
      }
    }
    throw new IllegalArgumentException("Nenhuma categoria correspondente para o texto => " + text + ".");
  }

  public static Categoria fromStringPtBr(String text) {
    for (Categoria categoria : Categoria.values()) {
      if (categoria.categoriaEmPtBr.equalsIgnoreCase(text)) {
        return categoria;
      }
    }
    throw new IllegalArgumentException("Nenhuma categoria correspondente para o texto => " + text + ".");
  }
}

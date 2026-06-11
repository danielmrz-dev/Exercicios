package br.com.fipe.tabela_fipe.model;

public record Dados(String codigo, String nome) {
  @Override
  public String toString() {
    return "Código: %s - Marca: %s".formatted(codigo, nome);
  }
}

package org.example;

public class FilmeOuSerieBase {
  private String nome;
  private int anoDeLancamento;
  private boolean inclusoNoPlano;
  private int duracaoEmMinutos;
  private int totalDeAvaliacoes;
  private double avaliacao;

  public void exibirFichaTecnica() {
    System.out.printf("""
      Nome do filme: %s
      Ano de lançamento: %d
      Duração: %d minutos.
      Avaliação: %.1f
      Total de avaliações: %d
      """, nome, anoDeLancamento, duracaoEmMinutos, avaliacao, totalDeAvaliacoes);
  }

  public void avalia(double nota) {
    avaliacao += nota;
    totalDeAvaliacoes++;
  }

  public String obterMediaDeAvaliacoes() {
    return "A média das avaliações é: " + (avaliacao / totalDeAvaliacoes);
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public int getAnoDeLancamento() {
    return anoDeLancamento;
  }

  public void setAnoDeLancamento(int anoDeLancamento) {
    this.anoDeLancamento = anoDeLancamento;
  }

  public boolean isInclusoNoPlano() {
    return inclusoNoPlano;
  }

  public void setInclusoNoPlano(boolean inclusoNoPlano) {
    this.inclusoNoPlano = inclusoNoPlano;
  }

  public int getDuracaoEmMinutos() {
    return duracaoEmMinutos;
  }

  public void setDuracaoEmMinutos(int duracaoEmMinutos) {
    this.duracaoEmMinutos = duracaoEmMinutos;
  }

  public int getTotalDeAvaliacoes() {
    return totalDeAvaliacoes;
  }

  public void setTotalDeAvaliacoes(int totalDeAvaliacoes) {
    this.totalDeAvaliacoes = totalDeAvaliacoes;
  }

  public double getAvaliacao() {
    return avaliacao;
  }

  public void setAvaliacao(double avaliacao) {
    this.avaliacao = avaliacao;
  }
}

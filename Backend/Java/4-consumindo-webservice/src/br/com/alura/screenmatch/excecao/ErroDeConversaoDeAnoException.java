package br.com.alura.screenmatch.excecao;

public class ErroDeConversaoDeAnoException extends RuntimeException {

  private final String mensagem;

  public ErroDeConversaoDeAnoException(String message) {
    this.mensagem = message;
  }

  @Override
  public String getMessage() {
    return this.mensagem;
  }
}

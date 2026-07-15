package med.voll.api.exception;

public class PacienteNaoEncontradoException extends RuntimeException {
  public PacienteNaoEncontradoException(String message) {
    super(message);
  }
}

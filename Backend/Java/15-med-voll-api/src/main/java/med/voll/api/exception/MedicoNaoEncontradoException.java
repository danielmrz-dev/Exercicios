package med.voll.api.exception;

public class MedicoNaoEncontradoException extends RuntimeException {
  public MedicoNaoEncontradoException(String message) {
    super(message);
  }
}

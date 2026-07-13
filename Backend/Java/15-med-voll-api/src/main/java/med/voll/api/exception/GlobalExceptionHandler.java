package med.voll.api.exception;

import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

  private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

  private ResponseEntity<DefaultErrorResponse> buildResponse(String message, HttpStatus status) {
    DefaultErrorResponse defaultErrorResponse = new DefaultErrorResponse(status.getReasonPhrase(), status.value(), message, LocalDateTime.now());
    return ResponseEntity.status(status).body(defaultErrorResponse);
  }

  private ResponseEntity<FieldValidationErrorResponse> buildValidationResponse(List<FieldValidationErrorMessage> errors) {
    FieldValidationErrorResponse responseError = new FieldValidationErrorResponse(
      HttpStatus.BAD_REQUEST.getReasonPhrase(),
      HttpStatus.BAD_REQUEST.value(),
      LocalDateTime.now(),
      errors
    );
    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(responseError);
  }

  @ExceptionHandler(EntityNotFoundException.class)
  public ResponseEntity<DefaultErrorResponse> medicoNotFoundException(EntityNotFoundException e) {
    return buildResponse(e.getMessage(), HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(HttpRequestMethodNotSupportedException.class)
  public ResponseEntity<DefaultErrorResponse> methodNotAllowedException(HttpRequestMethodNotSupportedException e) {
    return buildResponse(e.getMessage(), HttpStatus.METHOD_NOT_ALLOWED);
  }

  @ExceptionHandler(AuthenticationException.class)
  public ResponseEntity<DefaultErrorResponse> authenticationException(AuthenticationException e) {
    return buildResponse("Usuário ou senha inválidos", HttpStatus.UNAUTHORIZED);
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public ResponseEntity<FieldValidationErrorResponse> fieldsValidationException(MethodArgumentNotValidException e) {
    return buildValidationResponse(
      e.getFieldErrors()
        .stream()
        .map(FieldValidationErrorMessage::new)
        .toList()
    );
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<DefaultErrorResponse> unmappedException(Exception e) {
    logger.error("Erro não tratado", e.getCause());
    return buildResponse("Ocorreu um erro interno. Tente novamente mais tarde.", HttpStatus.INTERNAL_SERVER_ERROR);
  }

}

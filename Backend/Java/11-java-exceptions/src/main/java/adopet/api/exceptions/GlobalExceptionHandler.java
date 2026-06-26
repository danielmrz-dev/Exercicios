package adopet.api.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

  private ResponseEntity<ResponseError> buildResponse(String message, HttpStatus status) {
    ResponseError error = new ResponseError(message, status.value(), LocalDateTime.now());
    return ResponseEntity.status(status).body(error);
  }

  @ExceptionHandler(AdocaoException.class)
  public ResponseEntity<ResponseError> adocaoException(AdocaoException e) {
    return buildResponse(e.getMessage(), HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(Exception.class)
  public ResponseEntity<ResponseError> generalExceptionHandler(Exception e) {
    return buildResponse(e.getMessage(), HttpStatus.BAD_REQUEST);

  }
}

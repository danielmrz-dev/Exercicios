package br.com.biblioteca.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private ResponseEntity<DefaultErrorResponse> buildErrorResponse(String message, HttpStatus status) {
		DefaultErrorResponse response = new DefaultErrorResponse(status.getReasonPhrase(), status.value(), message, LocalDateTime.now());
		return ResponseEntity.status(status).body(response);
	}

	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<DefaultErrorResponse> handleAuthenticationException(AuthenticationException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(UserAlreadyExistsException.class)
	public ResponseEntity<DefaultErrorResponse> handleUserAlreadyExistsException(UserAlreadyExistsException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.CONFLICT);
	}

	@ExceptionHandler(TokenGenerationException.class)
	public ResponseEntity<DefaultErrorResponse> handleTokenGenerationException(TokenGenerationException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.UNAUTHORIZED);
	}
}

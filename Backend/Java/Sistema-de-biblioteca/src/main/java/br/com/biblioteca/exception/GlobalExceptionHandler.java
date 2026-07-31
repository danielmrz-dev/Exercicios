package br.com.biblioteca.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler {

	private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(GlobalExceptionHandler.class);

	private ResponseEntity<DefaultErrorResponse> buildErrorResponse(String message, HttpStatus status) {
		DefaultErrorResponse response = new DefaultErrorResponse(status.getReasonPhrase(), status.value(), message, LocalDateTime.now());
		return ResponseEntity.status(status).body(response);
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

	@ExceptionHandler(UserNotFoundException.class)
	public ResponseEntity<DefaultErrorResponse> handleUserNotFoundException(UserNotFoundException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(LivroNotFoundException.class)
	public ResponseEntity<DefaultErrorResponse> handleLivroNotFoundException(LivroNotFoundException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(UserAlreadyHasBookException.class)
	public ResponseEntity<DefaultErrorResponse> handleUserAlreadyHasBookException(UserAlreadyHasBookException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.CONFLICT);
	}

	@ExceptionHandler(UserNotActiveException.class)
	public ResponseEntity<DefaultErrorResponse> handleUserNotActiveException(UserNotActiveException ex) {
		return buildErrorResponse(ex.getMessage(), HttpStatus.FORBIDDEN);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<DefaultErrorResponse> handleException(Exception ex) {
		log.error("Unhandled exception", ex);
		return buildErrorResponse("Internal server error", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<FieldValidationErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		return buildValidationResponse(
			e.getFieldErrors()
				.stream()
				.map(FieldValidationErrorMessage::new)
				.toList()
		);
	}

}

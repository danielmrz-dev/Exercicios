package br.com.biblioteca.exception;

import java.time.LocalDateTime;
import java.util.List;

public record FieldValidationErrorResponse(
	String error,
	Integer statusCode,
	LocalDateTime date,
	List<FieldValidationErrorMessage> errors
) {
}


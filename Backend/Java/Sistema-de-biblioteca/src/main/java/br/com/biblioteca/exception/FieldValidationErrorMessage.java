package br.com.biblioteca.exception;

import org.springframework.validation.FieldError;

public record FieldValidationErrorMessage(
	String field,
	String errorMessage
) {

	public FieldValidationErrorMessage(FieldError error) {
		this(error.getField(), error.getDefaultMessage());
	}
}


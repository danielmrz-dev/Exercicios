package br.com.biblioteca.exception;

import java.time.LocalDateTime;

public record DefaultErrorResponse(
	String error,
	Integer statusCode,
	String message,
	LocalDateTime date
) {
}

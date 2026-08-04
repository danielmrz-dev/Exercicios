package br.com.biblioteca.exception;

public class GoogleAuthenticationException extends RuntimeException {
	public GoogleAuthenticationException(String message) {
		super(message);
	}
}

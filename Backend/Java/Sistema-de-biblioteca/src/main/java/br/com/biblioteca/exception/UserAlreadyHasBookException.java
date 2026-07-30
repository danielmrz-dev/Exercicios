package br.com.biblioteca.exception;

public class UserAlreadyHasBookException extends RuntimeException {
	public UserAlreadyHasBookException(String message) {
		super(message);
	}
}

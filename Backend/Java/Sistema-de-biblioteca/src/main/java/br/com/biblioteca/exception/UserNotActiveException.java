package br.com.biblioteca.exception;

public class UserNotActiveException extends RuntimeException {
	public UserNotActiveException(String message) {
		super(message);
	}
}

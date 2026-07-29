package br.com.biblioteca.domain.auth;

public record TokenData(
	String token,
	String refreshToken
) {
}
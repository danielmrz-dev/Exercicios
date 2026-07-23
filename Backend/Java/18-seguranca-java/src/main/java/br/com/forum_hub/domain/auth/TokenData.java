package br.com.forum_hub.domain.auth;

public record TokenData(
	String token,
	String refreshToken
) {
}

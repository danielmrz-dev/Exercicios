package br.com.biblioteca.domain.auth;

import jakarta.validation.constraints.NotBlank;

public record GoogleLoginRequestData(
	@NotBlank String idToken
) {
}

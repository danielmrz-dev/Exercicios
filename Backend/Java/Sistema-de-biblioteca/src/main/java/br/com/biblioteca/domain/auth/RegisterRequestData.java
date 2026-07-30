package br.com.biblioteca.domain.auth;

import jakarta.validation.constraints.NotBlank;

public record RegisterRequestData(
	@NotBlank String name,
	@NotBlank String email,
	@NotBlank String password
) {
}

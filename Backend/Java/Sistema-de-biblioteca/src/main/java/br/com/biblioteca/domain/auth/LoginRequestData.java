package br.com.biblioteca.domain.auth;

import jakarta.validation.constraints.NotBlank;

public record LoginRequestData(
	@NotBlank String email,
	@NotBlank String password
) {
}

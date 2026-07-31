package br.com.biblioteca.domain.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record LoginRequestData(
	@NotBlank @Email String email,
	@NotBlank String password
) {
}

package br.com.biblioteca.domain.usuario;

import jakarta.validation.constraints.Email;

public record NovoUsuarioDTO(
	@Email String email
) {
	public NovoUsuarioDTO(String email) {
		this.email = email;
	}
}

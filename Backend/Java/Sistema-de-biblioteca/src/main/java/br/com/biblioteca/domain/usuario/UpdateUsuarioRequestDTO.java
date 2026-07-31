package br.com.biblioteca.domain.usuario;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.Email;

public record UpdateUsuarioRequestDTO(
	String name,
	@Email @Nullable String email,
	Boolean isAtivo
) {
}

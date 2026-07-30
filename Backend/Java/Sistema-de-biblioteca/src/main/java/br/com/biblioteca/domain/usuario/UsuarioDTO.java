package br.com.biblioteca.domain.usuario;

import java.util.UUID;

public record UsuarioDTO(
	UUID id,
	String name,
	String email
) {
}

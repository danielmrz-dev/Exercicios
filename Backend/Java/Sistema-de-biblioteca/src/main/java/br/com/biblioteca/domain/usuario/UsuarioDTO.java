package br.com.biblioteca.domain.usuario;

import java.util.UUID;

public record UsuarioDTO(
	UUID id,
	String name,
	String email,
	Boolean isAtivo
) {
	public UsuarioDTO(Usuario usuario) {
		this(usuario.getId(), usuario.getName(), usuario.getUsername(), usuario.isAtivo());
	}
}

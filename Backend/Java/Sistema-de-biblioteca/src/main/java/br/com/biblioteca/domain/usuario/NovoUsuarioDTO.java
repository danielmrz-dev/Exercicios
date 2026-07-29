package br.com.biblioteca.domain.usuario;

public record NovoUsuarioDTO(
	String email
) {
	public NovoUsuarioDTO(String email) {
		this.email = email;
	}
}

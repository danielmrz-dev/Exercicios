package br.com.biblioteca.domain.emprestimo;

import br.com.biblioteca.domain.usuario.UsuarioDTO;

import java.time.LocalDateTime;
import java.util.UUID;

public record EmprestimoInfoDTO(
	UUID id,
	UsuarioDTO usuario,
	String livro,
	LocalDateTime dataEmprestimo
) {
}

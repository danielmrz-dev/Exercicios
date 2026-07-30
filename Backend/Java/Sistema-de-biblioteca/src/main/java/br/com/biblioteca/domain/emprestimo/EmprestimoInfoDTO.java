package br.com.biblioteca.domain.emprestimo;

import java.time.LocalDateTime;
import java.util.UUID;

public record EmprestimoInfoDTO(
	UUID id,
	String usuario,
	String livro,
	LocalDateTime dataEmprestimo
) {
}

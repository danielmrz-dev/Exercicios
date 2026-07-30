package br.com.biblioteca.domain.emprestimo;

import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public record EmprestimoRequestDTO(
	@NotNull UUID usuarioId,
	@NotNull UUID livroId
) {
}

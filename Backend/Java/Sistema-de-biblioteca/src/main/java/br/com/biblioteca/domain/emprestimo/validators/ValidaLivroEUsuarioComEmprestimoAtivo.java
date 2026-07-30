package br.com.biblioteca.domain.emprestimo.validators;

import br.com.biblioteca.domain.emprestimo.Emprestimo;
import br.com.biblioteca.domain.emprestimo.EmprestimoRepository;
import br.com.biblioteca.domain.emprestimo.EmprestimoRequestDTO;
import br.com.biblioteca.domain.livro.LivroRepository;
import br.com.biblioteca.exception.UserAlreadyHasBookException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class ValidaLivroEUsuarioComEmprestimoAtivo implements ValidaEmprestimo {

	@Autowired
	EmprestimoRepository emprestimoRepository;

	@Autowired
	LivroRepository livroRepository;

	@Override
	public void validar(EmprestimoRequestDTO dados) {
		List<Emprestimo> emprestimosDoUsuario = emprestimoRepository.findAllByUsuarioId(dados.usuarioId());

			if (emprestimosDoUsuario == null || emprestimosDoUsuario.isEmpty()) {
				return;
			}

			LocalDateTime agora = LocalDateTime.now();
			boolean possuiEmprestimoAtivo = emprestimosDoUsuario.stream()
				.anyMatch(e -> e.getLivro() != null
					&& e.getLivro().getId() != null
					&& e.getLivro().getId().equals(dados.livroId())
					&& e.getDataEmprestimo() != null
					&& e.getDataDevolucao() != null
					&& !agora.isBefore(e.getDataEmprestimo())
					&& !agora.isAfter(e.getDataDevolucao())
				);

			if (possuiEmprestimoAtivo) {
				throw new UserAlreadyHasBookException("Usuário já possui empréstimo ativo deste livro.");
		}

	}
}

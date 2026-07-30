package br.com.biblioteca.domain.emprestimo.validators;

import br.com.biblioteca.domain.emprestimo.EmprestimoRequestDTO;

public interface ValidaEmprestimo {
	void validar(EmprestimoRequestDTO dados);
}

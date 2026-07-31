package br.com.biblioteca.domain.emprestimo.validators;

import br.com.biblioteca.domain.emprestimo.EmprestimoRequestDTO;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.exception.UserNotActiveException;
import br.com.biblioteca.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
@Order(1)
public class ValidaUsuarioAtivo implements ValidaEmprestimo {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public void validar(EmprestimoRequestDTO dados) {
		Usuario usuario = usuarioRepository.findById(dados.usuarioId())
			.orElseThrow(() -> new UserNotFoundException("Usuário não encontrado"));

		boolean isUsuarioAtivo = usuario.isAtivo();

		if (!isUsuarioAtivo) {
			throw new UserNotActiveException("Este usuário está inativo e não pode realizar novos empréstimos.");
		}

	}
}

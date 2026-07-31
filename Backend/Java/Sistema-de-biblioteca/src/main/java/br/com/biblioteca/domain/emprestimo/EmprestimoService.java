package br.com.biblioteca.domain.emprestimo;

import br.com.biblioteca.domain.emprestimo.validators.ValidaEmprestimo;
import br.com.biblioteca.domain.livro.Livro;
import br.com.biblioteca.domain.livro.LivroRepository;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.exception.LivroNotFoundException;
import br.com.biblioteca.exception.UserNotFoundException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class EmprestimoService {

	@Autowired
	private EmprestimoRepository emprestimoRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private LivroRepository livroRepository;

	@Autowired
	private List<ValidaEmprestimo> validadores;

	public List<EmprestimoInfoDTO> listarEmprestimosPorUsuario(UUID usuarioId) {

		Usuario usuario = usuarioRepository.findById(usuarioId)
			.orElseThrow(() -> new UserNotFoundException("Usuário não encontrado."));

		List<Emprestimo> emprestimos = emprestimoRepository.findAllByUsuarioId(usuario.getId());

		List<EmprestimoInfoDTO> emprestimoInfoDTOS = emprestimos.stream()
			.map(emprestimo -> {
				return new EmprestimoInfoDTO(
					emprestimo.getId(),
					emprestimo.getUsuario().getName(),
					emprestimo.getLivro().getTitulo(),
					emprestimo.getDataEmprestimo()
				);
			}).toList();

		return emprestimoInfoDTOS;
	}

	public EmprestimoInfoDTO fazerNovoEmprestimo(@Valid EmprestimoRequestDTO novoEmprestimo) {
		validadores.forEach(v -> v.validar(novoEmprestimo));

		Usuario usuario = usuarioRepository.findById(novoEmprestimo.usuarioId())
			.orElseThrow(() -> new UserNotFoundException("Usuário não encontrado."));

		Livro livro = livroRepository.findById(novoEmprestimo.livroId())
			.orElseThrow(() -> new LivroNotFoundException("Usuário não encontrado."));


		Emprestimo emprestimo = emprestimoRepository.save(new Emprestimo(usuario, livro, LocalDateTime.now(), LocalDateTime.now().plusDays(7)));

		return new EmprestimoInfoDTO(
			emprestimo.getId(),
			emprestimo.getUsuario().getName(),
			emprestimo.getLivro().getTitulo(),
			emprestimo.getDataEmprestimo()
		);


	}
}

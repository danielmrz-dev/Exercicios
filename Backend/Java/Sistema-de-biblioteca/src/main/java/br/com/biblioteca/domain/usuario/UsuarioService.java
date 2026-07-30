package br.com.biblioteca.domain.usuario;

import br.com.biblioteca.domain.auth.RegisterRequestData;
import br.com.biblioteca.exception.UserAlreadyExistsException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return usuarioRepository.findByEmailIgnoreCase(username)
			.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));
	}


	public NovoUsuarioDTO register(@Valid RegisterRequestData data) {
		Optional<Usuario> usuarioJaCadastrado = usuarioRepository.findByEmailIgnoreCase(data.email());

		if (usuarioJaCadastrado.isPresent()) {
			throw new UserAlreadyExistsException("Usuário já cadastrado.");
		}

		Usuario novoUsuario = new Usuario(data.name(), data.email(), passwordEncoder.encode(data.password()));
		usuarioRepository.save(novoUsuario);

		return new NovoUsuarioDTO(novoUsuario.getUsername());
	}

	public List<UsuarioDTO> getUsers() {
		var users = usuarioRepository.findAll();

		return users
			.stream()
			.map(user -> new UsuarioDTO(user.getId(), user.getName(), user.getUsername()))
			.collect(Collectors.toList());
	}
}

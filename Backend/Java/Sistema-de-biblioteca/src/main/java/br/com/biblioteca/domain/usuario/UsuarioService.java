package br.com.biblioteca.domain.usuario;

import br.com.biblioteca.domain.auth.LoginRequestData;
import br.com.biblioteca.exception.UserAlreadyExistsException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

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


	public NovoUsuarioDTO register(@Valid LoginRequestData data) {
		Optional<Usuario> usuarioJaCadastrado = usuarioRepository.findByEmailIgnoreCase(data.email());

		if (usuarioJaCadastrado.isPresent()) {
			throw new UserAlreadyExistsException("Usuário já cadastrado.");
		}

		Usuario novoUsuario = new Usuario(data.email(), passwordEncoder.encode(data.password()));
		usuarioRepository.save(novoUsuario);

		return new NovoUsuarioDTO(novoUsuario.getUsername());
	}
}

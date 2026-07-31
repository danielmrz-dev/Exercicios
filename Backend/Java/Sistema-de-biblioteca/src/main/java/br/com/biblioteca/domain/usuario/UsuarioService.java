package br.com.biblioteca.domain.usuario;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
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

	public List<UsuarioDTO> getUsers() {
		var users = usuarioRepository.findAll();
		return users
			.stream()
			.map(user -> new UsuarioDTO(user.getId(), user.getName(), user.getUsername(), user.isAtivo()))
			.collect(Collectors.toList());
	}

	public UsuarioDTO getUserById(UUID id) {
		Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));
		return new UsuarioDTO(usuario.getId(), usuario.getName(), usuario.getUsername(), usuario.isAtivo());
	}

	public UsuarioDTO updateUser(UUID id, @Valid UpdateUsuarioRequestDTO updateUser) {
		Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));
		if (updateUser.name() != null) {
			usuario.setName(updateUser.name());
		}
		if (updateUser.email() != null) {
			usuario.setEmail(updateUser.email());
		}
		if (updateUser.isAtivo() != null) {
			usuario.setAtivo(updateUser.isAtivo());
		}
		usuarioRepository.save(usuario);
		return new UsuarioDTO(usuario.getId(), usuario.getName(), usuario.getUsername(), usuario.isAtivo());
	}

	public void deleteUser(UUID id) {
		Usuario usuario = usuarioRepository.findById(id)
			.orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));
		usuario.setAtivo(false);
		usuarioRepository.save(usuario);
	}
}

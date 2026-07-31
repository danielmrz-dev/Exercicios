package br.com.biblioteca.domain.auth;

import br.com.biblioteca.domain.usuario.NovoUsuarioDTO;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.exception.TokenGenerationException;
import br.com.biblioteca.exception.UserAlreadyExistsException;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class AuthService {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenService tokenService;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	public TokenData login(LoginRequestData data) {
		var authToken = new UsernamePasswordAuthenticationToken(data.email(), data.password());
		var authData = authenticationManager.authenticate(authToken);
		String tokenJwt = tokenService.generateToken((Usuario) authData.getPrincipal());
		String refreshToken = tokenService.generateRefreshToken((Usuario) authData.getPrincipal());
		return new TokenData(tokenJwt, refreshToken);
	}

	public NovoUsuarioDTO register(@Valid RegisterRequestData data) {
		Optional<Usuario> usuarioJaCadastrado = usuarioRepository.findByEmailIgnoreCase(data.email());

		if (usuarioJaCadastrado.isPresent()) {
			throw new UserAlreadyExistsException("Usuário já cadastrado.");
		}

		Usuario novoUsuario = new Usuario(data.name(), data.email(), passwordEncoder.encode(data.password()), true);
		usuarioRepository.save(novoUsuario);

		return new NovoUsuarioDTO(novoUsuario.getUsername());
	}

	public TokenData refreshToken(RefreshTokenData data) {
		var refreshToken = data.refreshToken();
		var id = UUID.fromString(tokenService.verifyRefreshToken(refreshToken));
		Usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new TokenGenerationException("Token JWT inválido."));
		String tokenJwt = tokenService.generateToken(usuario);
		String newRefreshToken = tokenService.generateRefreshToken(usuario);
		return new TokenData(tokenJwt, newRefreshToken);
	}
}

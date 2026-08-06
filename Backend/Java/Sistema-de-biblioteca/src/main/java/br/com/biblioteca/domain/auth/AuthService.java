package br.com.biblioteca.domain.auth;

import br.com.biblioteca.domain.usuario.NovoUsuarioDTO;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.exception.GoogleAuthenticationException;
import br.com.biblioteca.exception.TokenGenerationException;
import br.com.biblioteca.exception.UserAlreadyExistsException;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.Collections;
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

	@Value("${google.client-id}")
	private String googleClientId;

	public TokenData login(LoginRequestData data) {
		var authToken = new UsernamePasswordAuthenticationToken(data.email(), data.password());
		var authData = authenticationManager.authenticate(authToken);
		String tokenJwt = tokenService.generateToken((Usuario) authData.getPrincipal());
		String refreshToken = tokenService.generateRefreshToken((Usuario) authData.getPrincipal());
		return new TokenData(tokenJwt, refreshToken);
	}

	public TokenData loginWithGoogle(GoogleLoginRequestData loginRequestData) {
		GoogleIdToken.Payload payload = verifyGoogleIdToken(loginRequestData.idToken());


		String email = payload.getEmail();
		String name = (String) payload.get("name");
		String givenName = (String) payload.get("given_name");
		System.out.println(givenName);

		Usuario usuario = usuarioRepository.findByEmailIgnoreCase(email)
			.orElseGet(() -> {
				Usuario novoUsuario = new Usuario(name, email, true, UserAuthProvider.GOOGLE);
				return usuarioRepository.save(novoUsuario);
			});

		String tokenJwt = tokenService.generateToken(usuario);
		String refreshToken = tokenService.generateRefreshToken(usuario);
		return new TokenData(tokenJwt, refreshToken);
	}

	private GoogleIdToken.Payload verifyGoogleIdToken(String idTokenString) {
		try {
			GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(
				new NetHttpTransport(), GsonFactory.getDefaultInstance())
				.setAudience(Collections.singletonList(googleClientId))
				.build();

			GoogleIdToken idToken = verifier.verify(idTokenString);
			if (idToken == null) {
				throw new GoogleAuthenticationException("Token do Google inválido.");
			}
			return idToken.getPayload();
		} catch (GeneralSecurityException | IOException | IllegalArgumentException e) {
			throw new GoogleAuthenticationException("Erro ao validar token do Google.");
		}
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

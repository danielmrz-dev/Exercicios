package br.com.forum_hub.controller;

import br.com.forum_hub.domain.auth.AuthRequestData;
import br.com.forum_hub.domain.auth.RefreshTokenData;
import br.com.forum_hub.domain.auth.TokenData;
import br.com.forum_hub.domain.auth.TokenService;
import br.com.forum_hub.domain.usuario.Usuario;
import br.com.forum_hub.domain.usuario.UsuarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping()
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private TokenService tokenService;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public ResponseEntity<TokenData> login(@RequestBody @Valid AuthRequestData data) {
		var authToken = new UsernamePasswordAuthenticationToken(data.email(), data.password());
		var authenticationData = authenticationManager.authenticate(authToken);
		String tokenJwt = tokenService.generateToken((Usuario) authenticationData.getPrincipal());
		String refreshToken = tokenService.generateRefreshToken((Usuario) authenticationData.getPrincipal());
		return ResponseEntity.ok(new TokenData(tokenJwt, refreshToken));
	}

	@PostMapping("/atualizar-token")
	public ResponseEntity<TokenData> atualizarToken(@RequestBody @Valid RefreshTokenData data) {
		var refreshToken = data.refreshToken();
		var id = Long.valueOf(tokenService.verifyToken(refreshToken));
		Usuario usuario = usuarioRepository.findById(id).orElseThrow();
		String tokenJwt = tokenService.generateToken(usuario);
		String newRefreshToken = tokenService.generateRefreshToken(usuario);
		return ResponseEntity.ok(new TokenData(tokenJwt, newRefreshToken));
	}
}

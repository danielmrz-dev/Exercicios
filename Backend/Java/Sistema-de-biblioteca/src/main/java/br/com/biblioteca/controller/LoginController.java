package br.com.biblioteca.controller;

import br.com.biblioteca.domain.auth.*;
import br.com.biblioteca.domain.usuario.NovoUsuarioDTO;
import br.com.biblioteca.domain.usuario.Usuario;
import br.com.biblioteca.domain.usuario.UsuarioRepository;
import br.com.biblioteca.domain.usuario.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("/auth")
public class LoginController {

	@Autowired
	private AuthService authService;
	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private TokenService tokenService;
	@Autowired
	private UsuarioRepository usuarioRepository;

	@PostMapping("/login")
	public ResponseEntity<TokenData> login(@RequestBody @Valid LoginRequestData data) {
		var tokens = authService.login(data);
		return ResponseEntity.status(HttpStatus.OK).body(tokens);
	}

	@PostMapping("/refresh-token")
	public ResponseEntity<TokenData> atualizarToken(@RequestBody @Valid RefreshTokenData data) {
		var tokens = authService.refreshToken(data);
		return ResponseEntity.status(HttpStatus.OK).body(tokens);
	}

	@PostMapping("/register")
	public ResponseEntity<NovoUsuarioDTO> register(@RequestBody @Valid LoginRequestData data) {
		NovoUsuarioDTO novoUsuario = usuarioService.register(data);
		return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);
	}

}

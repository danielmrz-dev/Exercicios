package br.com.forum_hub.controller;

import br.com.forum_hub.domain.autenticacao.DadosToken;
import br.com.forum_hub.domain.autenticacao.TokenService;
import br.com.forum_hub.domain.autenticacao.github.LoginGoogleService;
import br.com.forum_hub.domain.perfil.PerfilNome;
import br.com.forum_hub.domain.perfil.PerfilRepository;
import br.com.forum_hub.domain.usuario.Usuario;
import br.com.forum_hub.domain.usuario.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.UUID;

@RestController
@RequestMapping("/login/google")
public class LoginGoogleController {

	@Autowired
	private LoginGoogleService loginGoogleService;
	@Autowired

	private PerfilRepository perfilRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private TokenService tokenService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@GetMapping
	public ResponseEntity<Void> redirecionaParaGoogle() {
		var url = loginGoogleService.gerarUrl();
		var headers = new HttpHeaders();
		headers.setLocation(URI.create(url));
		return ResponseEntity.status(HttpStatus.FOUND).headers(headers).build();
	}

	@GetMapping("/autorizado")
	public ResponseEntity<DadosToken> autenticarUsuarioOAuth(@RequestParam String code) {
		String email = loginGoogleService.obterEmail(code);
		var usuario = usuarioRepository.findByEmailIgnoreCaseAndVerificadoTrue(email)
			.orElseGet(() -> criarUsuarioOAuth(email));

		Authentication authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String tokenAcesso = tokenService.gerarToken((Usuario) authentication.getPrincipal());
		String refreshToken = tokenService.gerarRefreshToken((Usuario) authentication.getPrincipal());
		return ResponseEntity.ok(new DadosToken(tokenAcesso, refreshToken));
	}

	private Usuario criarUsuarioOAuth(String email) {
		var novoUsuario = new Usuario();
		novoUsuario.setEmail(email);
		novoUsuario.setNomeCompleto(email.split("@")[0]);
		novoUsuario.setNomeUsuario(gerarNomeUsuarioUnico(email));
		novoUsuario.setSenha(passwordEncoder.encode(UUID.randomUUID().toString()));
		novoUsuario.setAtivo(true);
		novoUsuario.setVerificado(true);
		novoUsuario.adicionarPerfil(perfilRepository.findByNome(PerfilNome.ESTUDANTE));
		return usuarioRepository.save(novoUsuario);
	}

	private String gerarNomeUsuarioUnico(String email) {
		String base = email.split("@")[0];
		String candidato = base;
		while (usuarioRepository.existsByNomeUsuario(candidato)) {
			candidato = base + UUID.randomUUID().toString().substring(0, 6);
		}
		return candidato;
	}
}
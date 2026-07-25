package br.com.forum_hub.domain.usuario;

import br.com.forum_hub.domain.perfil.PerfilNome;
import br.com.forum_hub.domain.perfil.PerfilRepository;
import br.com.forum_hub.infra.email.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuarioService implements UserDetailsService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private EmailService emailService;

	@Autowired
	private PerfilRepository perfilRepository;

	public UsuarioService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository = usuarioRepository;
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return usuarioRepository.findByEmailIgnoreCaseAndVerificadoTrue(username)
			.orElseThrow(() -> new UsernameNotFoundException("O usuário não foi encontrado!"));
	}

	@Transactional
	public Usuario cadastrar(DadosCadastroUsuario dados) {
		var senhaCriptografada = passwordEncoder.encode(dados.senha());

		var perfil = perfilRepository.findByNome(PerfilNome.ESTUDANTE);

		var usuario = new Usuario(dados, senhaCriptografada, perfil);
		emailService.enviarEmailVerificacao(usuario);
		return usuarioRepository.save(usuario);
	}

	@Transactional
	public void verificarEmail(String codigo) {
		var usuario = usuarioRepository.findByToken(codigo).orElseThrow();
		usuario.verificar();
	}
}
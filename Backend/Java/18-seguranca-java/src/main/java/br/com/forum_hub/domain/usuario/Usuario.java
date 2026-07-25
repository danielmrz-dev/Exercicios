package br.com.forum_hub.domain.usuario;

import br.com.forum_hub.domain.perfil.Perfil;
import br.com.forum_hub.infra.exception.RegraDeNegocioException;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "usuarios")
public class Usuario implements UserDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;
	private String nomeDeUsuario;
	private String email;
	private String senha;
	private String bio;
	private String miniBio;
	private Boolean verificado;
	private String token;
	private LocalDateTime expiracaoToken;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(
		name = "usuarios_perfis",
		joinColumns = @JoinColumn(name = "usuario_id"),
		inverseJoinColumns = @JoinColumn(name = "perfil_id")
	)
	private List<Perfil> perfis = new ArrayList<>();

	public Usuario(DadosCadastroUsuario dados, String senhaCriptografada, Perfil perfil) {
		this.nome = dados.nome();
		this.nomeDeUsuario = dados.nomeDeUsuario();
		this.email = dados.email();
		this.senha = senhaCriptografada;
		this.bio = dados.bio();
		this.miniBio = dados.miniBio();
		this.verificado = false;
		this.token = UUID.randomUUID().toString();
		this.expiracaoToken = LocalDateTime.now().plusMinutes(30);
		this.perfis.add(perfil);
	}

	public Usuario() {
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return perfis;
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return email;
	}

	public String getNomeDeUsuario() {
		return nomeDeUsuario;
	}

	public String getBio() {
		return bio;
	}

	public String getMiniBio() {
		return miniBio;
	}

	public Long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public Boolean getVerificado() {
		return verificado;
	}

	public String getToken() {
		return token;
	}

	public LocalDateTime getExpiracaoToken() {
		return expiracaoToken;
	}

	public void verificar() {
		if (expiracaoToken.isBefore(LocalDateTime.now())) {
			throw new RegraDeNegocioException("Link de verificação expirado.");
		}
		this.verificado = true;
		this.token = null;
		this.expiracaoToken = null;
	}
}

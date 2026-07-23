package br.com.forum_hub.domain.usuario;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

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

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
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
}

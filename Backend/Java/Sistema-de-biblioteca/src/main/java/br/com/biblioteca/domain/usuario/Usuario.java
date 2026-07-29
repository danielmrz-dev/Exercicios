package br.com.biblioteca.domain.usuario;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "usuarios")
public class Usuario implements UserDetails {

	@Getter
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	private String email;
	private String password;

	public Usuario(@NotBlank String email, @NotBlank String password) {
		this.email = email;
		this.password = password;
	}

	public Usuario() {
		
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of();
	}

	@Override
	public @Nullable String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

}

package br.com.biblioteca.domain.usuario;

import br.com.biblioteca.domain.auth.UserAuthProvider;
import br.com.biblioteca.domain.emprestimo.Emprestimo;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;
import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
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

	@Getter
	@Setter
	@Column(nullable = false, length = 100)
	private String name;

	@Column(nullable = false, length = 100, unique = true)
	@Setter
	private String email;

	@Column(nullable = true, length = 100)
	private String password;

	@Getter
	@Setter
	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 20)
	private UserAuthProvider provider = UserAuthProvider.LOCAL;

	@OneToMany(mappedBy = "usuario") // usuario na entidade emprestimo
	private List<Emprestimo> emprestimos = new ArrayList<>();

	@Column(nullable = false)
	@Getter
	@Setter
	private boolean ativo;

	public Usuario(@NotBlank String name, @NotBlank String email, @NotBlank String password, boolean ativo) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.ativo = ativo;
	}

	public Usuario() {
	}

	public Usuario(String name, String email, boolean ativo) {
		this.name = name;
		this.email = email;
		this.ativo = ativo;
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

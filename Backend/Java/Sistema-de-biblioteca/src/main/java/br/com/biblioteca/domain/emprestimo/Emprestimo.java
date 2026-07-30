package br.com.biblioteca.domain.emprestimo;

import br.com.biblioteca.domain.livro.Livro;
import br.com.biblioteca.domain.usuario.Usuario;
import jakarta.persistence.*;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "emprestimos")
public class Emprestimo {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Getter
	private UUID id;

	@ManyToOne
	@JoinColumn(name = "usuario_id") // indica qual coluna da entidade NO BANCO (não na classe) é a FK
	@Getter
	private Usuario usuario;

	@ManyToOne
	@JoinColumn(name = "livro_id") // indica qual coluna da entidade NO BANCO (não na classe) é a FK
	@Getter
	private Livro livro;

	@Getter
	private LocalDateTime dataEmprestimo;

	@Getter
	private LocalDateTime dataDevolucao;

	public Emprestimo() {
	}

	public Emprestimo(Usuario usuario, Livro livro, LocalDateTime dataEmprestimo, LocalDateTime dataDevolucao) {
		this.usuario = usuario;
		this.livro = livro;
		this.dataEmprestimo = dataEmprestimo;
		this.dataDevolucao = dataDevolucao;
	}
}

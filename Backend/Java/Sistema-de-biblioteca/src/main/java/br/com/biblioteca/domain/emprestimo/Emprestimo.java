package br.com.biblioteca.domain.emprestimo;

import br.com.biblioteca.domain.livro.Livro;
import br.com.biblioteca.domain.usuario.Usuario;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "emprestimos")
public class Emprestimo {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	private UUID id;

	@ManyToOne
	@JoinColumn(name = "usuario_id") // indica qual coluna na entidade é a FK
	private Usuario usuario;

	@ManyToOne
	@JoinColumn(name = "livro_id") // indica qual coluna na entidade é a FK
	private Livro livro;

	private LocalDateTime dataEmprestimo;

	private LocalDateTime dataDevolucao;


}

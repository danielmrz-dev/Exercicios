package br.com.biblioteca.domain.livro;

import br.com.biblioteca.domain.emprestimo.Emprestimo;
import jakarta.persistence.*;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "livros")
public class Livro {

	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Getter
	private UUID id;

	@Column(nullable = false)
	@Getter
	private String titulo;

	@Column(nullable = false, length = 100)
	@Getter
	private String autor;

	@OneToMany(mappedBy = "livro")
	private List<Emprestimo> emprestimos = new ArrayList<>();
}

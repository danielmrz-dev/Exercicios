package br.com.biblioteca.domain.emprestimo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface EmprestimoRepository extends JpaRepository<Emprestimo, UUID> {
	List<Emprestimo> findAllByUsuarioId(UUID usuarioId);
}

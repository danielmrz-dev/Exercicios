package br.com.biblioteca.controller;

import br.com.biblioteca.domain.emprestimo.EmprestimoInfoDTO;
import br.com.biblioteca.domain.emprestimo.EmprestimoRequestDTO;
import br.com.biblioteca.domain.emprestimo.EmprestimoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/emprestimos")
public class EmprestimoController {

	@Autowired
	private EmprestimoService emprestimoService;

	@GetMapping("/{id}")
	public ResponseEntity<List<EmprestimoInfoDTO>> listUserEmprestimos(@PathVariable UUID id) {
		List<EmprestimoInfoDTO> emprestimoInfoDTOS = emprestimoService.listarEmprestimosPorUsuario(id);
		return ResponseEntity.status(HttpStatus.OK).body(emprestimoInfoDTOS);
	}

	@PostMapping("/novo-emprestimo")
	public ResponseEntity<EmprestimoInfoDTO> fazerEmprestimo(@RequestBody @Valid EmprestimoRequestDTO novoEmprestimo) {
		EmprestimoInfoDTO emprestimo = emprestimoService.fazerNovoEmprestimo(novoEmprestimo);
		return ResponseEntity.status(HttpStatus.CREATED).body(emprestimo);
	}
}

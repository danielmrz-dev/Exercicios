package br.com.biblioteca.controller;

import br.com.biblioteca.domain.usuario.UpdateUsuarioRequestDTO;
import br.com.biblioteca.domain.usuario.UsuarioDTO;
import br.com.biblioteca.domain.usuario.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/users")
public class UsuarioController {

	@Autowired
	UsuarioService usuarioService;

	@GetMapping
	public ResponseEntity<List<UsuarioDTO>> listUsers() {
		List<UsuarioDTO> users = usuarioService.getUsers();
		return ResponseEntity.status(HttpStatus.OK).body(users);
	}

	@GetMapping("/{id}")
	public ResponseEntity<UsuarioDTO> getUserById(@PathVariable UUID id) {
		UsuarioDTO user = usuarioService.getUserById(id);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@PutMapping("/{id}")
	public ResponseEntity<UsuarioDTO> updateUserById(@PathVariable UUID id, @RequestBody @Valid UpdateUsuarioRequestDTO updateUser) {
		UsuarioDTO user = usuarioService.updateUser(id, updateUser);
		return ResponseEntity.status(HttpStatus.OK).body(user);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteUserById(@PathVariable UUID id) {
		usuarioService.deleteUser(id);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

}

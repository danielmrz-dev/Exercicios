package br.com.biblioteca.controller;

import br.com.biblioteca.domain.usuario.UsuarioDTO;
import br.com.biblioteca.domain.usuario.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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

}

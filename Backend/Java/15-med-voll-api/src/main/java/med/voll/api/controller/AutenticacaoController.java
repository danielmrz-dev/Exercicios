package med.voll.api.controller;

import jakarta.validation.Valid;
import med.voll.api.config.DadosTokenDTO;
import med.voll.api.config.TokenService;
import med.voll.api.domain.usuario.AutenticacaoDTO;
import med.voll.api.domain.usuario.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

@RestController
@RequestMapping("/login")
public class AutenticacaoController {

  @Autowired
  private AuthenticationManager authenticationManager;

  @Autowired
  private TokenService tokenService;

  @PostMapping
  public ResponseEntity<DadosTokenDTO> login(@RequestBody @Valid AutenticacaoDTO autenticacaoDTO) {
    var authToken = new UsernamePasswordAuthenticationToken(autenticacaoDTO.login(), autenticacaoDTO.senha());
    var authentication = authenticationManager.authenticate(authToken);

    var jwtToken = tokenService.generateToken((Usuario) Objects.requireNonNull(authentication.getPrincipal()));

    return ResponseEntity.ok().body(new DadosTokenDTO(jwtToken));
  }
}

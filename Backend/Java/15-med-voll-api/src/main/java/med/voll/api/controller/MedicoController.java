package med.voll.api.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import med.voll.api.domain.medico.*;
import med.voll.api.service.MedicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("medicos")
@SecurityRequirement(name = "bearer-key")
public class MedicoController {

  @Autowired
  private MedicoRepository medicoRepository;

  @Autowired
  private MedicoService medicoService;

  @PostMapping
  @Transactional
  public ResponseEntity<DadosDetalhesMedico> cadastrar(
    @RequestBody @Valid DadosCadastroMedicoDTO dadosCadastroMedicoDTO,
    UriComponentsBuilder uriBuilder
  ) {
    Medico medico = medicoRepository.save(new Medico(dadosCadastroMedicoDTO));
    var uri = uriBuilder.path("/medicos/{id}").buildAndExpand(medico.getId()).toUri();
    return ResponseEntity.created(uri).body(new DadosDetalhesMedico(medico));
  }

  @GetMapping
  public ResponseEntity<Page<DadosListagemMedicoDTO>> listarMedicos(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
    var result = medicoRepository.findAllByAtivoTrue(paginacao).map(DadosListagemMedicoDTO::new);
    return ResponseEntity.status(HttpStatus.OK).body(result);
  }

  @PutMapping
  @Transactional
  public ResponseEntity<DadosDetalhesMedico> atualizarMedico(@RequestBody @Valid DadosAtualizacaoMedicoDTO dadosAtualizados) {
    Medico medico = medicoRepository.getReferenceById(dadosAtualizados.id());
    medico.atualizarInformacoes(dadosAtualizados);

    return ResponseEntity.status(HttpStatus.OK).body(new DadosDetalhesMedico(medico));
  }

  @DeleteMapping("/{id}")
  @Transactional
  public ResponseEntity excluirMedico(@PathVariable Long id) {
    Medico medico = medicoRepository.getReferenceById(id);
    medico.excluir();
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @GetMapping("/{id}")
  public ResponseEntity<DadosDetalhesMedico> detalharMedico(@PathVariable Long id) {
    DadosDetalhesMedico medico = medicoService.obterMedicoPorId(id);
    return ResponseEntity.status(HttpStatus.OK).body(medico);
  }
}

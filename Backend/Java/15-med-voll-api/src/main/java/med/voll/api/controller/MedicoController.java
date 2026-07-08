package med.voll.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import med.voll.api.medico.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("medicos")
public class MedicoController {

  @Autowired
  private MedicoRepository medicoRepository;

  @PostMapping
  @Transactional
  public void cadastrar(@RequestBody @Valid DadosCadastroMedicoDTO dadosCadastroMedicoDTO) {
    medicoRepository.save(new Medico(dadosCadastroMedicoDTO));
  }

  @GetMapping
  public Page<DadosListagemMedicoDTO> listarMedicos(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
    return medicoRepository.findAllByAtivoTrue(paginacao).map(DadosListagemMedicoDTO::new);
  }

  @PutMapping
  @Transactional
  public void atualizarMedico(@RequestBody @Valid DadosAtualizacaoMedicoDTO dadosAtualizados) {
    Medico medico = medicoRepository.getReferenceById(dadosAtualizados.id());
    medico.atualizarInformacoes(dadosAtualizados);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void excluirMedico(@PathVariable Long id) {
    Medico medico = medicoRepository.getReferenceById(id);
    medico.excluir();
  }
}

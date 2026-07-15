package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.medico.Medico;
import med.voll.api.domain.medico.MedicoRepository;
import med.voll.api.exception.MedicoNaoEncontradoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidaMedicoAtivo implements ValidadorAgendamentoConsulta {

  @Autowired
  private MedicoRepository medicoRepository;

  public void validar(DadosAgendamentoConsulta dados) {
    if (dados.idMedico() == null) {
      return;
    }
    Medico medico = medicoRepository.findById(dados.idMedico())
      .orElseThrow(() -> new MedicoNaoEncontradoException("Médico com id " + dados.idMedico() + " não encontrado"));
    boolean medicoEstaAtivo = medico.getAtivo();
    if (!medicoEstaAtivo) {
      throw new RuntimeException("Consulta não pode ser agendada com médicos inativos.");
    }
  }
}

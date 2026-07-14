package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.medico.MedicoRepository;

public class ValidaMedicoAtivo {

  private MedicoRepository medicoRepository;

  public void valida(DadosAgendamentoConsulta dados) {
    if (dados.idMedico() == null) {
      return;
    }
    boolean medicoEstaAtivo = medicoRepository.findAtivoById(dados.idMedico());
    if (!medicoEstaAtivo) {
      throw new RuntimeException("Consulta não pode ser agendada com médicos inativos.");
    }
  }
}

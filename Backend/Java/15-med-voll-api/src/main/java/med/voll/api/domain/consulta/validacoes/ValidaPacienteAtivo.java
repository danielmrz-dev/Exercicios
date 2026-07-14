package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.paciente.PacienteRepository;

public class ValidaPacienteAtivo {

  private PacienteRepository pacienteRepository;

  public void valida(DadosAgendamentoConsulta dados) {

    boolean pacienteEstaAtivo = pacienteRepository.findAtivoById(dados.idPaciente());
    if (!pacienteEstaAtivo) {
      throw new RuntimeException("Paciente inativo não pode agendar consultas.");
    }
  }
}

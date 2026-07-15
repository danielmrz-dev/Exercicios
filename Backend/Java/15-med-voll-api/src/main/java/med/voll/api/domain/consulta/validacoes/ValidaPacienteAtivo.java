package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.paciente.Paciente;
import med.voll.api.domain.paciente.PacienteRepository;
import med.voll.api.exception.PacienteNaoEncontradoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidaPacienteAtivo implements ValidadorAgendamentoConsulta {

  @Autowired
  private PacienteRepository pacienteRepository;

  public void validar(DadosAgendamentoConsulta dados) {

    Paciente paciente = pacienteRepository.findById(dados.idPaciente())
      .orElseThrow(() -> new PacienteNaoEncontradoException("Paciente com id " + dados.idPaciente() + " não encontrado."));
    boolean pacienteEstaAtivo = paciente.getAtivo();
    if (!pacienteEstaAtivo) {
      throw new RuntimeException("Paciente inativo não pode agendar consultas.");
    }
  }
}

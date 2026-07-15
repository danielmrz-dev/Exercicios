package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.ConsultaRepository;
import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.exception.PacienteJaPossuiConsultaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ValidaPacienteSemOutraConsultaNoDia implements ValidadorAgendamentoConsulta {

  @Autowired
  private ConsultaRepository consultaRepository;

  public void validar(DadosAgendamentoConsulta dados) {
    var primeiroHorario = dados.data().withHour(7);
    var ultimoHorario = dados.data().withHour(18);

    var pacientePossuiOutraConsultaNoDia = consultaRepository.existsByPacienteIdAndDataBetween(
      dados.idPaciente(),
      primeiroHorario,
      ultimoHorario
    );

    if (pacientePossuiOutraConsultaNoDia) {
      throw new PacienteJaPossuiConsultaException("Paciente já possui consulta neste dia.");
    }

  }
}

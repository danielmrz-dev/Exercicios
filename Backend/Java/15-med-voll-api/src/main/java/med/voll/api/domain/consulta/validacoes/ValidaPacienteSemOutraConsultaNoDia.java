package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.ConsultaRepository;
import med.voll.api.domain.consulta.DadosAgendamentoConsulta;

public class ValidaPacienteSemOutraConsultaNoDia {

  private ConsultaRepository consultaRepository;

  public void valida(DadosAgendamentoConsulta dados) {
    var primeiroHorario = dados.data().withHour(7);
    var ultimoHorario = dados.data().withHour(18);

    var pacientePossuiOutraConsultaNoDia = consultaRepository.existsByPacienteIdAndDataBetween(
      dados.idPaciente(),
      primeiroHorario,
      ultimoHorario
    );
    
    if (pacientePossuiOutraConsultaNoDia) {
      throw new RuntimeException("Paciente já possui outra consulta neste dia.");
    }

  }
}

package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.ConsultaRepository;
import med.voll.api.domain.consulta.DadosAgendamentoConsulta;

public class ValidaMedicoJaTemConsultaNesteHorario {

  private ConsultaRepository consultaRepository;

  public void valida(DadosAgendamentoConsulta dados) {
    var medicoJaTemConsultaNesteHorario = consultaRepository.existsMedicoByIdAndData(dados.idMedico(), dados.data());
  }
}

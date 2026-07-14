package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

public class ValidaHorarioDeFuncionamentoDaClinica {

  public void validar(DadosAgendamentoConsulta dados) {
    LocalDateTime dataConsulta = dados.data();
    boolean isDomingo = dataConsulta.getDayOfWeek().equals(DayOfWeek.SUNDAY);
    var antesDaAberturaClinica = dataConsulta.getHour() < 7;
    var depoisDaAberturaClinica = dataConsulta.getHour() < 18;

    if (isDomingo || antesDaAberturaClinica || depoisDaAberturaClinica) {
      throw new RuntimeException("Fora do horário de atendimento da clínica.");
    }

  }
}

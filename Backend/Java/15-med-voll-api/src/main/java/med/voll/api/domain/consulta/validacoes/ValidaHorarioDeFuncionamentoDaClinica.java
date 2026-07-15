package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import org.springframework.stereotype.Component;

import java.time.DayOfWeek;
import java.time.LocalDateTime;

@Component
public class ValidaHorarioDeFuncionamentoDaClinica implements ValidadorAgendamentoConsulta {

  public void validar(DadosAgendamentoConsulta dados) {
    LocalDateTime dataConsulta = dados.data();
    boolean isDomingo = dataConsulta.getDayOfWeek().equals(DayOfWeek.SUNDAY);
    var antesDaAberturaClinica = dataConsulta.getHour() < 7;
    var depoisDaAberturaClinica = dataConsulta.getHour() > 18;

    if (isDomingo || antesDaAberturaClinica || depoisDaAberturaClinica) {
      throw new RuntimeException("Fora do horário de atendimento da clínica.");
    }

  }
}

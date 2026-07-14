package med.voll.api.domain.consulta.validacoes;

import med.voll.api.domain.consulta.DadosAgendamentoConsulta;

import java.time.Duration;
import java.time.LocalDateTime;

public class ValidaHorarioDaConsulta {

  public void validar(DadosAgendamentoConsulta dados) {
    LocalDateTime dataConsulta = dados.data();
    LocalDateTime agora = LocalDateTime.now();
    var diferencaEmMinutos = Duration.between(agora, dataConsulta).toMinutes();
    if (diferencaEmMinutos < 30) {
      throw new RuntimeException("Não é possível agendar uma consulta com menos de 30 minutos de antecedência.");
    }
  }
}

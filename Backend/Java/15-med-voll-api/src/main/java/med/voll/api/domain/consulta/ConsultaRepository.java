package med.voll.api.domain.consulta;

import med.voll.api.controller.Consulta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;

public interface ConsultaRepository extends JpaRepository<Consulta, Long> {
  boolean existsByPacienteIdAndDataBetween(Long idPaciente, LocalDateTime primeiroHorario, LocalDateTime ultimoHorario);

  boolean existsMedicoByIdAndData(Long aLong, LocalDateTime data);
}

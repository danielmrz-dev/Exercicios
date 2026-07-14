package med.voll.api.domain.consulta;

import jakarta.persistence.EntityNotFoundException;
import med.voll.api.controller.Consulta;
import med.voll.api.domain.medico.Medico;
import med.voll.api.domain.medico.MedicoRepository;
import med.voll.api.domain.paciente.Paciente;
import med.voll.api.domain.paciente.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AgendaDeConsultas {

  @Autowired
  private ConsultaRepository consultaRepository;

  @Autowired
  private MedicoRepository medicoRepository;

  @Autowired
  private PacienteRepository pacienteRepository;

  public void agendar(DadosAgendamentoConsulta dados) {
    if (dados.idMedico() != null && !medicoRepository.existsById(dados.idMedico())) {
      Medico medico = medicoRepository.findById(dados.idMedico())
        .orElseThrow(() -> new EntityNotFoundException("Médico não encontrado."));
    }

    Paciente paciente = pacienteRepository.getReferenceById(dados.idPaciente());

    var medico = escolherMedico(dados);
    var consulta = new Consulta(null, medico, paciente, dados.data());
    consultaRepository.save(consulta);
  }

  private Medico escolherMedico(DadosAgendamentoConsulta dados) {
    if (dados.idMedico() != null) {
      return medicoRepository.getReferenceById(dados.idMedico());
    }

    if (dados.especialidade() == null) {
      throw new RuntimeException("A especialidade precisa ser escolhida.");
    }

    return medicoRepository.escolherMedicoAleatorioDisponivel(dados.especialidade(), dados.data());
  }
}

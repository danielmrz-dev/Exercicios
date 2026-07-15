package med.voll.api.domain.consulta;

import med.voll.api.controller.Consulta;
import med.voll.api.domain.consulta.validacoes.ValidadorAgendamentoConsulta;
import med.voll.api.domain.medico.Medico;
import med.voll.api.domain.medico.MedicoRepository;
import med.voll.api.domain.paciente.Paciente;
import med.voll.api.domain.paciente.PacienteRepository;
import med.voll.api.exception.MedicoNaoEncontradoException;
import med.voll.api.exception.NenhumMedicoDisponivelException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgendaDeConsultas {

  @Autowired
  private ConsultaRepository consultaRepository;

  @Autowired
  private MedicoRepository medicoRepository;

  @Autowired
  private PacienteRepository pacienteRepository;

  @Autowired
  private List<ValidadorAgendamentoConsulta> validadores;

  public DadosDetalhamentoConsulta agendar(DadosAgendamentoConsulta dados) {
    if (dados.idMedico() != null && !medicoRepository.existsById(dados.idMedico())) {
      Medico medico = medicoRepository.findById(dados.idMedico())
        .orElseThrow(() -> new MedicoNaoEncontradoException("Médico não encontrado."));
    }
    validadores.forEach(v -> v.validar(dados));
    Paciente paciente = pacienteRepository.getReferenceById(dados.idPaciente());
    var medico = escolherMedico(dados);
    if (medico == null) {
      throw new NenhumMedicoDisponivelException("Não há nenhum médico desta especialidade disponível neste dia e horário.");
    }
    var consulta = new Consulta(null, medico, paciente, dados.data());
    consultaRepository.save(consulta);
    return new DadosDetalhamentoConsulta(consulta);
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

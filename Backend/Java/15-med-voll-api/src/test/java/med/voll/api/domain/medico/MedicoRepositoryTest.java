package med.voll.api.domain.medico;

import med.voll.api.controller.Consulta;
import med.voll.api.domain.endereco.EnderecoDTO;
import med.voll.api.domain.paciente.DadosCadastroPaciente;
import med.voll.api.domain.paciente.Paciente;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;
import org.springframework.boot.jpa.test.autoconfigure.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.TemporalAdjusters;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ActiveProfiles("test")
class MedicoRepositoryTest {

  @Autowired
  private MedicoRepository medicoRepository;

  @Autowired
  private TestEntityManager testEntityManager;

  @Test
  @DisplayName("Deve retornar null quando único médico cadastrado não está disponível na data")
  void escolherMedicoAleatorioDisponivelCenario1() {
    var data = LocalDate.now()
      .with(TemporalAdjusters.next(DayOfWeek.MONDAY))
      .atTime(10, 0);

    Medico medico = cadastrarMedico("Julio", "julio@vollmed.com", "156234", Especialidade.DERMATOLOGIA);
    Paciente paciente = cadastrarPaciente("Maria", "maria@gmail.com", "65412398799");
    cadastrarConsulta(medico, paciente, data);

    Medico medicoDisponivel = medicoRepository.escolherMedicoAleatorioDisponivel(
      Especialidade.CARDIOLOGIA,
      data
    );

    Assertions.assertThat(medicoDisponivel).isNull();
  }

  @Test
  @DisplayName("Deveria devolver medico quando ele estiver disponivel na data")
  void escolherMedicoAleatorioLivreNaDataCenario2() {
    var proximaSegundaAs10 = LocalDate.now()
      .with(TemporalAdjusters.next(DayOfWeek.MONDAY))
      .atTime(10, 0);
    var medico = cadastrarMedico("Medico", "medico@voll.med", "123456", Especialidade.CARDIOLOGIA);

    var medicoLivre = medicoRepository.escolherMedicoAleatorioDisponivel(Especialidade.CARDIOLOGIA, proximaSegundaAs10);
    Assertions.assertThat(medicoLivre).isEqualTo(medico);
  }

  private void cadastrarConsulta(Medico medico, Paciente paciente, LocalDateTime data) {
    testEntityManager.persist(new Consulta(null, medico, paciente, data));
  }

  private Medico cadastrarMedico(String nome, String email, String crm, Especialidade especialidade) {
    var medico = new Medico(dadosMedico(nome, email, crm, especialidade));
    testEntityManager.persist(medico);
    return medico;
  }

  private Paciente cadastrarPaciente(String nome, String email, String cpf) {
    var paciente = new Paciente(dadosPaciente(nome, email, cpf));
    testEntityManager.persist(paciente);
    return paciente;
  }

  private DadosCadastroMedicoDTO dadosMedico(String nome, String email, String crm, Especialidade especialidade) {
    return new DadosCadastroMedicoDTO(
      nome,
      email,
      "61999999999",
      crm,
      especialidade,
      dadosEndereco()
    );
  }

  private DadosCadastroPaciente dadosPaciente(String nome, String email, String cpf) {
    return new DadosCadastroPaciente(
      nome,
      email,
      "61999999999",
      cpf,
      dadosEndereco()
    );
  }

  private EnderecoDTO dadosEndereco() {
    return new EnderecoDTO(
      "rua xpto",
      "bairro",
      "00000000",
      "Brasilia",
      "DF",
      null,
      null
    );
  }
}
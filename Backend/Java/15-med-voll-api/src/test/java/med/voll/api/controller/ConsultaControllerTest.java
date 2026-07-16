package med.voll.api.controller;

import med.voll.api.domain.consulta.AgendaDeConsultas;
import med.voll.api.domain.consulta.DadosAgendamentoConsulta;
import med.voll.api.domain.consulta.DadosDetalhamentoConsulta;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
@ActiveProfiles("test")
class ConsultaControllerTest {

  @Autowired
  private MockMvc mvc;

  @Autowired
  private JacksonTester<DadosAgendamentoConsulta> dadosAgendamentoJson;

  @Autowired
  private JacksonTester<DadosDetalhamentoConsulta> dadosDetalhamentoJson;

  @MockitoBean
  private AgendaDeConsultas agenda;

  @Test
  @DisplayName("Deve retornar código 200 ao agendar uma consulta com dados válidos")
  @WithMockUser
  void agendarCenario1() throws Exception {
    var data = LocalDateTime.now().plusDays(1);
    var dadosAgendamento = new DadosAgendamentoConsulta(1L, 1L, data, null);

    var dadosDetalhamento = new DadosDetalhamentoConsulta(
      1L,
      1L,
      1L,
      data
    );

    when(agenda.agendar(any())).thenReturn(dadosDetalhamento);

    var response = mvc.perform(
      post("/consultas")
        .contentType(MediaType.APPLICATION_JSON)
        .content(dadosAgendamentoJson.write(dadosAgendamento).getJson())
    ).andReturn().getResponse();

    assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());

    var jsonEsperado = dadosDetalhamentoJson.write(dadosDetalhamento).getJson();
    assertThat(response.getContentAsString()).isEqualTo(jsonEsperado);
  }

  @Test
  @DisplayName("Deve retornar código 400 ao agendar sem autenticação")
  void agendarCenario2() throws Exception {
    var data = LocalDateTime.now().plusDays(1);
    var dadosAgendamento = new DadosAgendamentoConsulta(1L, 1L, data, null);

    var response = mvc.perform(
      post("/consultas")
        .contentType(MediaType.APPLICATION_JSON)
        .content(dadosAgendamentoJson.write(dadosAgendamento).getJson())
    ).andReturn().getResponse();

    assertThat(response.getStatus()).isEqualTo(HttpStatus.FORBIDDEN.value());
  }

}
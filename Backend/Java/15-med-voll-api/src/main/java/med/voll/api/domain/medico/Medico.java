package med.voll.api.domain.medico;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import med.voll.api.domain.endereco.Endereco;

@Entity
@Table(name = "medicos")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Medico {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String nome;
  private String email;
  private String telefone;
  private String crm;

  @Enumerated(EnumType.STRING)
  private Especialidade especialidade;

  @Embedded
  private Endereco endereco;

  private Boolean ativo;

  public Medico(DadosCadastroMedicoDTO dadosCadastroMedicoDTO) {
    this.nome = dadosCadastroMedicoDTO.nome();
    this.email = dadosCadastroMedicoDTO.email();
    this.telefone = dadosCadastroMedicoDTO.telefone();
    this.crm = dadosCadastroMedicoDTO.crm();
    this.especialidade = dadosCadastroMedicoDTO.especialidade();
    this.ativo = true;
    this.endereco = new Endereco(dadosCadastroMedicoDTO.endereco());
  }

  public void atualizarInformacoes(@Valid DadosAtualizacaoMedicoDTO dadosAtualizados) {
    if (dadosAtualizados.nome() != null) {
      this.nome = dadosAtualizados.nome();
    }
    if (dadosAtualizados.telefone() != null) {
      this.telefone = dadosAtualizados.telefone();
    }
    if (dadosAtualizados.email() != null) {
      this.email = dadosAtualizados.email();
    }
    if (dadosAtualizados.endereco() != null) {
      this.endereco.atualizarEndereco(dadosAtualizados.endereco());
    }
  }

  public void excluir() {
    this.ativo = false;
  }
}

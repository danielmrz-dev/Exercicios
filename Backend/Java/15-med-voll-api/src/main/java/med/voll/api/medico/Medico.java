package med.voll.api.medico;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import med.voll.api.endereco.Endereco;

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

  public Medico(DadosCadastroMedicoDTO dadosCadastroMedicoDTO) {
    this.nome = dadosCadastroMedicoDTO.nome();
    this.email = dadosCadastroMedicoDTO.email();
    this.telefone = dadosCadastroMedicoDTO.telefone();
    this.crm = dadosCadastroMedicoDTO.crm();
    this.especialidade = dadosCadastroMedicoDTO.especialidade();
    this.endereco = new Endereco(dadosCadastroMedicoDTO.endereco());
  }
}

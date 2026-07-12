package med.voll.api.domain.medico;

import med.voll.api.domain.endereco.Endereco;

public record DadosDetalhesMedico(
  Long id,
  String nome,
  String email,
  String crm,
  Especialidade especialidade,
  Endereco endereco
) {
  public DadosDetalhesMedico(Medico medico) {
    this(medico.getId(), medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getEspecialidade(), medico.getEndereco());
  }

}

package med.voll.api.medico;

public record DadosListagemMedicoDTO(
  Long id,
  String nome,
  String email,
  String crm,
  Boolean ativo,
  Especialidade especialidade
) {
  public DadosListagemMedicoDTO(Medico medico) {
    this(medico.getId(), medico.getNome(), medico.getEmail(), medico.getCrm(), medico.getAtivo(), medico.getEspecialidade());
  }
}

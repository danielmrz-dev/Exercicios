package med.voll.api.service;

import jakarta.persistence.EntityNotFoundException;
import med.voll.api.domain.medico.DadosDetalhesMedico;
import med.voll.api.domain.medico.Medico;
import med.voll.api.domain.medico.MedicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicoService {

  @Autowired
  private MedicoRepository medicoRepository;

  public DadosDetalhesMedico obterMedicoPorId(Long id) {
    Medico medico = medicoRepository.findById(id)
      .orElseThrow(() -> new EntityNotFoundException("Médico com id " + id + " não encontrado."));
    return new DadosDetalhesMedico(medico);
  }
}

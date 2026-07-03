package br.com.alura.adopet.api.service;

import br.com.alura.adopet.api.dto.SolicitacaoAdocaoDto;
import br.com.alura.adopet.api.model.Abrigo;
import br.com.alura.adopet.api.model.Adocao;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.Tutor;
import br.com.alura.adopet.api.repository.AdocaoRepository;
import br.com.alura.adopet.api.repository.PetRepository;
import br.com.alura.adopet.api.repository.TutorRepository;
import br.com.alura.adopet.api.validacoes.ValidacaoSolicitacaoAdocao;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.then;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;

@ExtendWith(MockitoExtension.class)
class AdocaoServiceTest {
  @InjectMocks private AdocaoService adocaoService;
  @Mock private AdocaoRepository adocaoRepository;
  @Mock private PetRepository petRepository;
  @Mock private TutorRepository tutorRepository;
  @Mock private EmailService emailService;
  @Spy private List<ValidacaoSolicitacaoAdocao> validacoes = new ArrayList<>();
  @Mock private ValidacaoSolicitacaoAdocao validacao1;
  @Mock private ValidacaoSolicitacaoAdocao validacao2;
  @Mock private ValidacaoSolicitacaoAdocao validacao3;
  @Mock private Pet pet;
  @Mock private Tutor tutor;
  @Mock private Abrigo abrigo;
  @Captor private ArgumentCaptor<Adocao> adocaoArgumentCaptor;

  private SolicitacaoAdocaoDto dto;

  @Test
  @DisplayName("Deveria salvar adoção ao solicitar")
  void deveriaSalvarAdocaoAoSolicitar() {
    this.dto = new SolicitacaoAdocaoDto(1L, 2L, "Motivo da adoção");
    BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
    BDDMockito.given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
    BDDMockito.given(pet.getAbrigo()).willReturn(abrigo);
    adocaoService.solicitar(dto);
    then(adocaoRepository).should().save(adocaoArgumentCaptor.capture());
    Adocao adocao = adocaoArgumentCaptor.getValue();
    assertEquals(pet, adocao.getPet());
    assertEquals(tutor, adocao.getTutor());
    assertEquals(dto.motivo(), adocao.getMotivo());
  }

  @Test
  @DisplayName("Deveria chamar os validadores ao solicitar")
  void deveriaChamarValidadoresAoSolicitar() {
    this.dto = new SolicitacaoAdocaoDto(1L, 2L, "Motivo da adoção");
    BDDMockito.given(petRepository.getReferenceById(dto.idPet())).willReturn(pet);
    BDDMockito.given(tutorRepository.getReferenceById(dto.idTutor())).willReturn(tutor);
    BDDMockito.given(pet.getAbrigo()).willReturn(abrigo);

    validacoes.add(validacao1);
    validacoes.add(validacao2);
    validacoes.add(validacao3);

    adocaoService.solicitar(dto);

    then(validacao1).should().validar(dto);
    then(validacao2).should().validar(dto);
    then(validacao3).should().validar(dto);

  }

}
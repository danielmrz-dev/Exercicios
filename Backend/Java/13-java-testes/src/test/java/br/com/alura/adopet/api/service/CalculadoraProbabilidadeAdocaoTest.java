package br.com.alura.adopet.api.service;

import br.com.alura.adopet.api.dto.CadastroAbrigoDto;
import br.com.alura.adopet.api.dto.CadastroPetDto;
import br.com.alura.adopet.api.model.Abrigo;
import br.com.alura.adopet.api.model.Pet;
import br.com.alura.adopet.api.model.ProbabilidadeAdocao;
import br.com.alura.adopet.api.model.TipoPet;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CalculadoraProbabilidadeAdocaoTest {

  @Test
  @DisplayName("Deve retornar probabilidade alta")
  void deveriaRetornarProbabilidadeAlta() {
    CalculadoraProbabilidadeAdocao calc = new CalculadoraProbabilidadeAdocao();
    CadastroPetDto petDTO = new CadastroPetDto(
      TipoPet.CACHORRO,
      "Foggy",
      "Pretinho safado",
      3,
      "Preto",
      4.0f
    );

    Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
      "PetHouse",
      "11999999999",
      "pethouse@pet.com")
    );
    Pet pet = new Pet(petDTO, abrigo);
    ProbabilidadeAdocao probabilidadeAdocao = calc.calcular(pet);
    Assertions.assertEquals(ProbabilidadeAdocao.ALTA, probabilidadeAdocao);
  }

  @Test
  @DisplayName("Deve retornar probabilidade média")
  void deveriaRetornarProbabilidadeMedia() {
    CalculadoraProbabilidadeAdocao calc = new CalculadoraProbabilidadeAdocao();
    CadastroPetDto petDTO = new CadastroPetDto(
      TipoPet.CACHORRO,
      "Foggy",
      "Pretinho safado",
      15,
      "Preto",
      3.0f
    );

    Abrigo abrigo = new Abrigo(new CadastroAbrigoDto(
      "PetHouse",
      "11999999999",
      "pethouse@pet.com")
    );
    Pet pet = new Pet(petDTO, abrigo);
    ProbabilidadeAdocao probabilidadeAdocao = calc.calcular(pet);
    Assertions.assertEquals(ProbabilidadeAdocao.MEDIA, probabilidadeAdocao);
  }
}
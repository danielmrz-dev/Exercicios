package br.com.mrz.screenmatch.models;

import org.example.FilmeOuSerieBase;

public class Serie extends FilmeOuSerieBase {
  int temporadas;
  int episodiosPorTemporada;
  boolean finalizada;

  @Override
  public void exibirFichaTecnica() {
    System.out.printf("""
        Nome da serie: %s
        Ano de lançamento: %d
        Duração: %d minutos.
        Avaliação: %.1f
        Total de avaliações: %d
        Temporadas: %d
        Episódios por temporada: %d
        Finalizada: %b
        """,
      this.getNome(),
      this.getAnoDeLancamento(),
      this.getDuracaoEmMinutos(),
      this.getAvaliacao(),
      this.getTotalDeAvaliacoes(),
      getTemporadas(),
      getEpisodiosPorTemporada(),
      isFinalizada()
    );
  }

  public int getTemporadas() {
    return temporadas;
  }

  public void setTemporadas(int temporadas) {
    this.temporadas = temporadas;
  }

  public int getEpisodiosPorTemporada() {
    return episodiosPorTemporada;
  }

  public void setEpisodiosPorTemporada(int episodiosPorTemporada) {
    this.episodiosPorTemporada = episodiosPorTemporada;
  }

  public boolean isFinalizada() {
    return finalizada;
  }

  public void setFinalizada(boolean finalizada) {
    this.finalizada = finalizada;
  }
}

package br.com.mrz.screenmatch.models;

import org.example.FilmeOuSerieBase;

public class Filme extends FilmeOuSerieBase {
  String diretor;

  public String getDiretor() {
    return diretor;
  }

  public void setDiretor(String diretor) {
    this.diretor = diretor;
  }
}

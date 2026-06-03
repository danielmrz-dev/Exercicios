package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.modelos.Endereco;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;

public class Buscador {
  public static void main(String[] args) {

    try {
      Gson gson = new GsonBuilder().setPrettyPrinting().create();
      ConsultaCep consulta = new ConsultaCep();
      Endereco enderecoBuscado = consulta.buscaEndereco();
      String json = gson.toJson(enderecoBuscado);
      GeradorDeArquivo gerador = new GeradorDeArquivo();
      gerador.geraJson(enderecoBuscado);
      System.out.println(json);
    } catch (Exception e) {
      System.err.println(e.getMessage());;
    }

  }
}

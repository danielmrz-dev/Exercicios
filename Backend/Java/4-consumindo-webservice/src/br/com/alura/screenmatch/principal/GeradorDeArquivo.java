package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.modelos.Endereco;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;

public class GeradorDeArquivo {
  Gson gson = new GsonBuilder().setPrettyPrinting().create();
  public void geraJson(Endereco endereco) throws IOException {
    FileWriter escrita = new FileWriter("endereco.json");
    escrita.write(gson.toJson(endereco));
    escrita.close();
  }
}

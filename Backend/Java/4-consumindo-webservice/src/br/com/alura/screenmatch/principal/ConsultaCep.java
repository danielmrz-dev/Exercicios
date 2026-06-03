package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.modelos.Endereco;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class ConsultaCep {

  public Endereco buscaEndereco() throws IOException, InterruptedException {

    Gson gson = new GsonBuilder().setPrettyPrinting().create();
    Scanner leitura = new Scanner(System.in);
    System.out.println("Digite o cep:");
    String busca = leitura.nextLine();

    String url = "https://viacep.com.br/ws/" + busca + "/json/";

    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create(url))
      .build();

    try {
      HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
      String json = response.body();
      return gson.fromJson(json, Endereco.class);
    } catch (Exception e) {
      throw new RuntimeException("Não foi possível fazer a busca com esse cep.");
    }

  }
}

package br.com.alura.screenmatch.principal;


import br.com.alura.screenmatch.modelos.Titulo;
import com.google.gson.Gson;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Scanner;

public class PrincipalComBusca {
  public static void main(String[] args) throws IOException, InterruptedException {

    Scanner leitor = new Scanner(System.in);

    System.out.println("Digite o filme para obter informações:");
    String filmeParaBuscar = leitor.next();
    String url = "http://www.omdbapi.com/?t=" + filmeParaBuscar + "&apikey=5e4cd86c";

    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder()
      .uri(URI.create(url))
      .build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

    Gson gson = new Gson();
    Titulo meuTitulo = gson.fromJson(response.body(), Titulo.class);
    System.out.println(meuTitulo);

  }
}

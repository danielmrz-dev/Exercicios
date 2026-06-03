package br.com.alura.screenmatch.principal;

import br.com.alura.screenmatch.excecao.ErroDeConversaoDeAnoException;
import br.com.alura.screenmatch.modelos.Titulo;
import br.com.alura.screenmatch.modelos.TituloOMBD;
import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.net.URI;
import java.net.URLEncoder;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class PrincipalComBusca {
  public static void main(String[] args) throws IOException, InterruptedException {

    Scanner leitura = new Scanner(System.in);
    String busca = "";
    List<Titulo> titulos = new ArrayList<>();
    Gson gson = new GsonBuilder().setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE).setPrettyPrinting().create();
    while (!busca.equalsIgnoreCase("sair")) {

      System.out.println("Digite um nome de filme para buscar informações:");
      busca = leitura.nextLine();
      if (busca.equalsIgnoreCase("sair")) {
        System.out.println("Saindo...");
        break;
      }


      String endereco = "https://www.omdbapi.com/?t=" + URLEncoder.encode(busca, StandardCharsets.UTF_8) + "&apikey=123805e8&";

      try {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
          .uri(URI.create(endereco))
          .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        String json = response.body();

        TituloOMBD meuTituloOmdb = gson.fromJson(json, TituloOMBD.class);
        Titulo meuTitulo = new Titulo(meuTituloOmdb);
        System.out.println(meuTitulo);

        titulos.add(meuTitulo);

      } catch (NumberFormatException e) {
        System.err.println("Deu erro: " + e.getMessage());
      } catch (IllegalArgumentException e) {
        System.err.println("Deu erro na formação da url de busca. Verifique o endereço. " + e.getMessage());
      } catch (ErroDeConversaoDeAnoException e) {
        System.err.println(e.getMessage());
      } catch (Exception e) {
        System.err.println("Houve algum erro inesperado. " + e.getMessage());
      }
    }
    System.out.println(titulos);
    FileWriter escrita = new FileWriter("filmes.json");
    escrita.write(gson.toJson(titulos));
    escrita.close();
  }
}

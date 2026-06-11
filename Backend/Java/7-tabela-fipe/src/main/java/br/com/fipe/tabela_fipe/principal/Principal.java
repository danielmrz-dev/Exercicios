package br.com.fipe.tabela_fipe.principal;

import br.com.fipe.tabela_fipe.model.Dados;
import br.com.fipe.tabela_fipe.model.Modelo;
import br.com.fipe.tabela_fipe.model.Veiculo;
import br.com.fipe.tabela_fipe.service.ConsumoApi;
import br.com.fipe.tabela_fipe.service.ConverteDados;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Principal {

  private Scanner leitura = new Scanner(System.in);
  private final String urlBase = "https://parallelum.com.br/fipe/api/v1/";
  private ConsumoApi consumo = new ConsumoApi();
  private ConverteDados conversor = new ConverteDados();

  public void exibeMenu() {
    var menu = """
      
      *** Opções ***
      
      1 - Carro
      2 - Moto
      3 - Caminhões
      
      Digite uma das opções acima para consultar:
      """;

    int opcao = 0;
    System.out.println(menu);
    opcao = leitura.nextInt();
    while (opcao > 3 || opcao < 1) {
      System.out.println("Opção inválida. Por favor, escolha uma das opções abaixo: ");
      System.out.println(menu);
      opcao = leitura.nextInt();
    }
    String endereco;

    if (opcao == 1) {
      endereco = urlBase + "carros/marcas";
    } else if (opcao == 2) {
      endereco = urlBase + "motos/marcas";
    } else {
      endereco = urlBase + "caminhoes/marcas";
    }

    var json = consumo.obterDados(endereco);
    var marcas  = conversor.obterLista(json, Dados.class);

    marcas.stream()
      .sorted(Comparator.comparing(Dados::codigo))
      .forEach(System.out::println);

    System.out.println("Informe o código da marca para consulta dos modelos:");

    var marca = leitura.nextInt();
    endereco = endereco + "/" + marca + "/modelos";
    json = consumo.obterDados(endereco);
    var modelos = conversor.obterDados(json, Modelo.class);
    modelos.modelos().stream()
      .sorted(Comparator.comparing(Dados::codigo))
      .forEach(System.out::println);

    System.out.println("Digite o nome do modelo para buscar mais informações:");
    var modelo = leitura.nextLine();

    List<Dados> modelosFiltrados = modelos.modelos().stream()
      .filter(v -> v.nome().toLowerCase().contains(modelo.toLowerCase()))
      .collect(Collectors.toList());

    System.out.println("Modelos filtrados: " + modelosFiltrados);
    System.out.println("Digite o código do modelo para ver mais informações:");
    var codigoDoModelo = leitura.nextInt();

    try {
      endereco = endereco + "/" + codigoDoModelo + "/anos";
      json = consumo.obterDados(endereco);
      List<Dados> anos = conversor.obterLista(json, Dados.class);
      List<Veiculo> veiculos = new ArrayList<>();
      for (int i = 0; i < anos.size(); i++) {
        var enderecoComAnos = endereco + "/" + anos.get(i).codigo();
        json = consumo.obterDados(enderecoComAnos);
        Veiculo veiculo = conversor.obterDados(json, Veiculo.class);
        veiculos.add(veiculo);
      }
      System.out.println("Veículos: ");
      veiculos.forEach(System.out::println);
    } catch (Exception e) {
      throw new RuntimeException(e.getMessage());
    }





  }
}

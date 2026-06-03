package br.com.alura.screenmatch.principal;

import com.google.gson.FieldNamingPolicy;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

public class Veiculo {
  private String modelo;
  private String cor;
  private int ano;

  public String getModelo() {
    return modelo;
  }

  public void setModelo(String modelo) {
    this.modelo = modelo;
  }

  public String getCor() {
    return cor;
  }

  public void setCor(String cor) {
    this.cor = cor;
  }

  public int getAno() {
    return ano;
  }

  public void setAno(int ano) {
    this.ano = ano;
  }

  public static void main(String[] args) {
    Veiculo carro = new Veiculo();
    carro.setModelo("Onix");
    carro.setCor("Azul Boreal");
    carro.setAno(2015);

    Gson gson = new GsonBuilder().setPrettyPrinting().create();

    String jsonVeiculo = gson.toJson(carro);
    System.out.println(jsonVeiculo);
  }
}
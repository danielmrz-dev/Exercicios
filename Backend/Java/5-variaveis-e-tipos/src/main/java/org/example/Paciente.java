package org.example;

public class Paciente {
  private String nome;
  private double altura;
  private double peso;
  private char sexo;

  public Paciente(String nome, double altura, double peso, char sexo) {
    this.nome = nome;
    this.altura = altura;
    this.peso = peso;
    this.sexo = sexo;
  }

  public String getNome() {
    return nome;
  }

  public void setNome(String nome) {
    this.nome = nome;
  }

  public double getAltura() {
    return altura;
  }

  public void setAltura(double altura) {
    this.altura = altura;
  }

  public double getPeso() {
    return peso;
  }

  public void setPeso(double peso) {
    this.peso = peso;
  }

  public char getSexo() {
    return sexo;
  }

  public void setSexo(char sexo) {
    this.sexo = sexo;
  }
}

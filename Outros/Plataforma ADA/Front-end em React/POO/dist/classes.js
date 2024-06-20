"use strict";
//= Uma interface é um modelo para que a classe criada siga a estrutura definida nessa interface. Quando uma classe implementa uma interface, ela é obrigada a fornecer uma implementação para todas as propriedades e métodos definidos na interface. Isso garante que a classe siga a estrutura definida pela interface.
//= Uma classe é um molde para a criação de objetos. Criar um objeto a partir de uma classe também é chamado de INSTANCIAR ou CRIAR UMA INSTÂNCIA dessa classe.
class Pessoa {
    //+ Construtor da classe, determina quais características/atributos essa classe terá
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    //! Métodos da classe, ou seja, as ações que podem ser realizadas por instâncias dessa classe
    cumprimentar() {
        console.log("Olá");
    }
    dormir() {
        console.log("Dormindo... 😴");
    }
}
const novaPessoa = new Pessoa("Daniel", 33, 1.80, 80);
console.log(novaPessoa);
novaPessoa.dormir();

"use strict";
//= Uma interface é um modelo para que a classe criada siga a estrutura definida nessa interface. Quando uma classe implementa uma interface, ela é obrigada a fornecer uma implementação para todas as propriedades e métodos definidos na interface. Isso garante que a classe siga a estrutura definida pela interface.
//= Uma classe é um molde para a criação de objetos. Criar um objeto a partir de uma classe também é chamado de INSTANCIAR ou CRIAR UMA INSTÂNCIA dessa classe.
class Pessoa {
    //* readonly cpf: string; //+ Nenhum valor pode ser reatribuído a essa propriedade porque ela é somente leitura (readonly)
    //+ Construtor da classe, determina quais características/atributos essa classe terá
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    //! Métodos da classe, ou seja, as ações que podem ser realizadas por instâncias dessa classe
    cumprimentar() {
        console.log("Olá");
    }
    dormir() {
        console.log("Dormindo... 😴");
    }
    //= Accessors => Métodos que permitem acessar propriedades que são privadas.
    //* GETTER => Método que permite obter o valor de uma propriedade privada
    get cpf() {
        return this._cpf;
    }
    //* SETTER => Método que permite alterar o valor de uma propriedade privada. A princípio, não faz muito sentido ter um método para reatribuir um valor à uma propriedade privada, mas o setter permite implementar uma lógica, uma condição para essa reatribuição do valor.
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("O CPF deve ter 14 dígitos.");
        }
        this._cpf = newCpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando... 👨🏽‍🏫");
    }
}
class Aluno extends Pessoa {
    constructor(nome, idade, altura, cpf, matricula) {
        super(nome, idade, altura, cpf);
        this.matricula = matricula;
    }
    aprender() {
        console.log("Aprendendo... 👨🏽‍🏫");
    }
}
const novaPessoa = new Pessoa("Daniel", 33, 1.80, "180.456.654-89");
console.log(novaPessoa);
novaPessoa.dormir();
console.log(novaPessoa.cpf);
novaPessoa.cpf = "novo cpf"; //= Os accessors são métodos, mas ao chamá-los, usamos a mesma sintaxe usada para acessar atributos (sem os parênteses).
console.log(novaPessoa.cpf);

type TemNome = {
  nome: string;
}

type TemSobrenome = {
  sobrenome: string;
}

type TemIdade = {
  idade: number;
}

type Pessoa = TemNome & TemIdade & TemSobrenome;

const pessoa: Pessoa = {
  nome: "Daniel",
  sobrenome: "Moraes",
  idade: 35,
}
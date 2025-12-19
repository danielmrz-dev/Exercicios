export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  get getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`
  }

  get getCpf(): string {
    return this.cpf;
  }

  get getIdade(): number {
    return this.idade;
  }
}

export class Aluno extends Pessoa {

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: number
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  get getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`
  }
}
export class Cliente extends Pessoa {
  get getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`
  }
}

const aluno = new Aluno('Daniel', 'Mariz', 35, '123456789', 125);
const cliente = new Cliente('Daniel', 'Mariz', 35, '123456789');
console.log(aluno.getNomeCompleto);
console.log(cliente.getNomeCompleto);





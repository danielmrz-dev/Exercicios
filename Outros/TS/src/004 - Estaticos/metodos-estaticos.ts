export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private _idade: number,
    protected _cpf: string,
  ) {}

  get idade() {
    return this._idade;
  }

  set idade(novaIdade: number) {
    this._idade = novaIdade;
  }

  static dizerOi(nome: string) {
    console.log(`Oi, ${nome}!`);
  }

  static criarPessoa(nome: string, idade: number): Pessoa {
    return new Pessoa('Daniel', '', 35, '0000000');
  }

  static idade: number = 35;
}

Pessoa.dizerOi('Daniel');
Pessoa.idade;

const pessoa = Pessoa.criarPessoa('Daniel', 35)
console.log(pessoa);

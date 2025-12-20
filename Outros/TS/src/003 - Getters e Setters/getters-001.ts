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
}

const pessoa = new Pessoa('dan', 'moraes', 35, '123456789');

pessoa.idade = 40;
console.log(pessoa.idade);

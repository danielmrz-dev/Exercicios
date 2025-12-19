class Colaborador {
  constructor(
    public readonly nome: string,
    private readonly sobrenome: string,
    protected readonly idade: number
  ) {}

  get getSobrenome() {
    return this.sobrenome;
  }
}

class Dev extends Colaborador {

}

export class Empresa {
  
  public readonly nome: string; // ACESSÍVEL EM QUALQUER LUGAR DENTRO E FORA DA CLASSE
  private readonly colaboradores: Colaborador[] = []; // ACESSÍVEL APENAS DENTRO DA CLASSE
  protected readonly cnpj: string; // ACESSÍVEL DENTRO DA CLASSE E NAS CLASSES QUE A HERDAM 

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  get listaDeColaboradores() {
    return this.colaboradores.map(c => `${c.nome} ${c.getSobrenome}`);
  }

  adicionarColaboradores(...novosColaboradores: Colaborador[]) {
    this.colaboradores.push(...novosColaboradores);
  }

}

const empresa = new Empresa('MrzDev', '12345678910');
const colaborador1 = new Colaborador('Daniel', 'Mariz', 32);
const colaborador2 = new Colaborador('Ana', 'Mariz', 35);
const dev = new Dev('Dan', 'Moraes', 35);
empresa.adicionarColaboradores(colaborador1, colaborador2);

console.log(empresa);

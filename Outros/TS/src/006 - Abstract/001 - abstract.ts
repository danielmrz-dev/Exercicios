export abstract class Personagem {
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem) {
    console.log(`${this.nome} está atacando...`);
    this.gritoDeGuerra();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number) {
    this.vida -= forcaAtaque;
    console.log(`${this.nome} agora tem ${this.vida} de vida...`);
  }

  gritoDeGuerra() {
    console.log('Gritoo!');
    
  }
}

export class Guerreira extends Personagem {}
export class Monstro extends Personagem {}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);


export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta ?? null;
  }

  escrever() {
    if (this.ferramenta === null) {
      console.log("Não há ferramenta.");
    }
    this.ferramenta?.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo.`);
  }
}

export class MaquinaDeEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando.`);
  }
}

const escritor = new Escritor('Daniel');
const caneta = new Caneta('Caneta');
const maquina = new MaquinaDeEscrever('Maquina');

escritor.ferramenta = caneta;
escritor.escrever();


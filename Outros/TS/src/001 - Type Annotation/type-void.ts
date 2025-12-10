export const pessoa = {
  nome: "Daniel",
  sobrenome: "Mariz",

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

pessoa.exibirNome();

// export { pessoa };
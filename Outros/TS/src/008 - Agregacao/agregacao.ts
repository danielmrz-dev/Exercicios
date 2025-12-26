export class Carrinho {

  private readonly produtos: Produto[] = [];

  adicionarProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeDeProdutos() {
    return this.produtos.length;
  }

  valorTotal() {
    const total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0)
    return `O valor atual do carrinho é de R$ ${total}.`
  }

  teste(): this {
    const novo = new Carrinho();
    return novo;
  }

}

export class Produto {
  constructor(private _nome: string, public preco: number) {}

  get nome() {
    return this._nome;
  }

}

const camisa = new Produto('Camisa', 50);

const carrinho = new Carrinho();
carrinho.adicionarProduto(camisa);
carrinho.adicionarProduto(camisa);
console.log(carrinho.valorTotal());

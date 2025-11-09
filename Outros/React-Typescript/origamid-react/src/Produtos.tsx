import React from "react";
import { useFetch } from "./hooks/useFetch";
import { buttonStyle } from "./Video";

interface Produto {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
}

function numberToCurrency(value: number) {
  const formattedValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formattedValue.format(value);
}

function Produtos() {
  const [id, setId] = React.useState<string>('p001');
  const produtos = useFetch<Produto[]>("https://data.origamid.dev/produtos/");
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex flex-col gap-4">
        {produtos.data &&
          produtos.data.map((produto) => {
            return (
              <button className={buttonStyle} key={produto.id} onClick={() => setId(produto.id)}>
                ID: {produto.id} -{produto.nome} -{" "}
                {numberToCurrency(produto.preco)}
              </button>
            );
          })}
      </div>
      <div>
        {produto.data && (
          <ul>
            <li> Id: {produto.data.id} </li>
            <li> Descrição: {produto.data.descricao} </li>
            <li> Internacional: {produto.data.internacional ? 'Sim' : 'Não'} </li>
            <li> Nome: {produto.data.nome} </li>
            <li> Preço: {numberToCurrency(produto.data.preco)} </li>
            <li> Quantidade: {produto.data.quantidade} </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Produtos;

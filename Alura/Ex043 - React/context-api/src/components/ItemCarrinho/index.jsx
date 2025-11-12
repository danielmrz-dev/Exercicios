import React from "react";
import Quantidade from "../Quantidade";
import ValorFormatado from "../ValorFormatado";

import { useCarrinho } from "../../hooks/useCarrinho";
import Botao from "../Botao";
import { InfoItemCarrinho } from "./InfoItemCarrinho";

export const ItemCarrinho = ({ itemCarrinho }) => {
  const { adicionarProduto, removerProduto, removerProdutoCarrinho } =
    useCarrinho();

  return (
    <li key={itemCarrinho.id}>
      <>
        <div className="produto">
          <img
            className="imagem__produto"
            src={itemCarrinho.src}
            alt={itemCarrinho.alt}
          />
          <InfoItemCarrinho itemCarrinho={itemCarrinho} />
          <ValorFormatado valor={itemCarrinho.preco} />
          <Quantidade
            itemCarrinho={itemCarrinho}
            adicionarProduto={() => adicionarProduto(itemCarrinho)}
            removerProduto={() => removerProduto(itemCarrinho.id)}
          />
          <Botao
            variant="deleteItem"
            aria-label="Excluir"
            removerProduto={() => removerProdutoCarrinho(itemCarrinho.id)}
          >
            delete_forever
          </Botao>
        </div>
        <div className="divisor my-5" />
      </>
    </li>
  );
};

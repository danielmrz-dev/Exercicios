import { useContext, useEffect, useMemo } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";
import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_QUANTIDADE,
} from "../reducers/CarrinhoReducer";

const addProdutoAction = (novoProduto) => ({
  type: ADD_PRODUTO,
  payload: novoProduto,
});

const removeProdutoAction = (id) => ({
  type: REMOVE_PRODUTO,
  payload: id,
});

const updateAmountAction = (produtoId, quantidade) => ({
  type: UPDATE_QUANTIDADE,
  payload: { produtoId, quantidade },
});

export const useCarrinho = () => {
  const { carrinho, quantidade, total, dispatch } = useContext(CarrinhoContext);

  const adicionarProduto = (novoProduto) => {
    dispatch(addProdutoAction(novoProduto));
  };

  const removerProduto = (id) => {
    const produto = carrinho.find((i) => i.id === id);
    if (produto && produto.quantidade > 1) {
      dispatch(updateAmountAction(id, produto.quantidade - 1))
    } else {
      dispatch(removeProdutoAction(id));
    }
  };

  const removerProdutoCarrinho = (id) => {
    dispatch(removeProdutoAction(id));
  };

  

  return {
    carrinho,
    adicionarProduto,
    removerProduto,
    removerProdutoCarrinho,
    total,
    quantidade,
  };
};

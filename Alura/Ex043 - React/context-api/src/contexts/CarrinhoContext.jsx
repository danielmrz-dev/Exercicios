import React, { useEffect, useMemo, useReducer, useState } from "react";
import { carrinhoReducer } from "../reducers/CarrinhoReducer";

export const CarrinhoContext = React.createContext();

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [quantidade, setQuantidade] = useState(0);
  const [total, setTotal] = useState(0);

  const { totalTemp, qtdeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acc, produto) => ({
        qtdeTemp: acc.qtdeTemp + produto.quantidade,
        totalTemp: acc.totalTemp + produto.preco * produto.quantidade,
      }),
      { qtdeTemp: 0, totalTemp: 0 }
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(qtdeTemp);
    setTotal(totalTemp);
  });

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        total,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

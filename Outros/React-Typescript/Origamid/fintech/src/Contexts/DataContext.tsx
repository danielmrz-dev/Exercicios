import React, { type PropsWithChildren } from "react";
import { useFetch } from "../Hooks/useFetch";

type IDataContext<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

interface IVenda {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
}

const DataContext = React.createContext<IDataContext<IVenda[]> | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
}

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dia = String(date.getDate()).padStart(2, '0');
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const ano = String(date.getFullYear());
  return `${ano}-${mes}-${dia}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {

  const [inicio, setInicio] = React.useState(getDate(30));
  const [final, setFinal] = React.useState(getDate(0));
  
  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider value={{ data, loading, error, inicio, setInicio, final, setFinal }}>
      {children}
    </DataContext.Provider>
  );
};

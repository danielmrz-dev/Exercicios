/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IUsuario } from "../types/usuario.interface";
import { criarTransacoes, criarUsuario, obterTransacoes, obterUsuario } from "../api";
import { ITransacao } from "../types/transacao.interface";

interface AppContextType {
  usuario: IUsuario | null;
  criaNovoUsuario: (usuario: Omit<IUsuario, "id" | "orcamentoDiario">) => Promise<void>;
  transacoes: ITransacao[];
  criaNovaTransacao: (transacao: Omit<ITransacao, "id">) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<IUsuario | null>(null);
  const [transacoes, setTransacoes] = useState<ITransacao[]>([]);

  const carregaDadosUsuario = async () => {
    try {
      const usuarios = await obterUsuario();
      const transacoes = await obterTransacoes();
      if (usuarios.length > 0) {
        setUsuario(usuarios[0]);
        setTransacoes(transacoes);
      }
    } catch (error) {
      alert(error);
    }
  };

  const criaNovoUsuario = async (usuario: Omit<IUsuario, "id" | "orcamentoDiario">) => {
    try {
      const novoUsuario = await criarUsuario(usuario);
      setUsuario(novoUsuario);
    } catch (error) {
      alert(error);
    }
  };

  const criaNovaTransacao = async (transacao: Omit<ITransacao, "id">) => {
    try {
      const novaTransacao = await criarTransacoes(transacao);
      setTransacoes((prev) => [...prev, novaTransacao]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    carregaDadosUsuario();
  });

  return (
    <AppContext.Provider
      value={{
        usuario,
        criaNovoUsuario,
        transacoes,
        criaNovaTransacao
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("O contexto precisa ser usado dentro de um provider.");
  return context;
};

import axios from "axios";
import { IUsuario } from "../types/usuario.interface";
import { ITransacao } from "../types/transacao.interface";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const obterUsuario = async (): Promise<IUsuario[]> => {
  const { data } = await api.get<IUsuario[]>("/usuarios");
  return data;
};

export const criarUsuario = async (
  usuario: Omit<IUsuario, "id" | "orcamentoDiario">,
): Promise<IUsuario> => {
  const usuarioComOrcamentoDiario = {
    ...usuario,
    orcamentoDiario: usuario.renda / 30
  }
  const { data } = await api.post<IUsuario>("/usuarios", usuarioComOrcamentoDiario);
  return data;
};

export const atualizarUsuario = async (id: string, dados: Partial<IUsuario>): Promise<IUsuario> => {
  const { data } = await api.patch(`/usuarios/${id}`, dados);
  return data;
};

export const obterTransacoes = async (): Promise<ITransacao[]> => {
  const { data } = await api.get<ITransacao[]>("/transacoes");
  return data;
};

export const criarTransacoes = async (
  transacao: Omit<ITransacao, "id">,
  usuario: Omit<IUsuario, "nome">  
): Promise<ITransacao> => {
  const transacaoComId = {
    ...transacao,
    userId: usuario.id
  }
  const { data } = await api.post<ITransacao>("/transacoes", transacaoComId);

  const transacoes = await obterTransacoes();
  const saldo = calcularSaldo(transacoes);

  const novoOrcamentoDiario = (usuario.renda / 30) + saldo;
  await atualizarUsuario(usuario.id, {
    orcamentoDiario: novoOrcamentoDiario
  }).catch((err) => console.error(err))

  return data;
};

const calcularSaldo = (transacoes: ITransacao[]): number => {
  return transacoes.reduce((total, atual) => {
    return atual.tipo === "receita" ? total + atual.valor : total - atual.valor;
  }, 0)
}


import { contaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente();

cliente1.nome = "Daniel";
cliente1.cpf = 99999999999;

const cliente2 = new Cliente();

cliente2.nome = "Ana";
cliente2.cpf = 99999976759;

const contaCorrenteDaniel = new contaCorrente();

contaCorrenteDaniel.agencia = 1001;
// contaCorrenteDaniel.#saldo = 200000000;

contaCorrenteDaniel.depositar(100);
contaCorrenteDaniel.depositar(100);
contaCorrenteDaniel.depositar(100);
const valorSacado = contaCorrenteDaniel.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteDaniel._saldo);

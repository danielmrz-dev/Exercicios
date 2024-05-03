import { contaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";

const cliente1 = new Cliente("Daniel", 99999999999); // Usando o construtor
const contaCorrenteCliente1 = new contaCorrente(1001, cliente1);

const cliente2 = new Cliente("Ana", 97699999999); // Usando o construtor
const contaCorrenteCliente2 = new contaCorrente(1001, cliente2);

const cliente3 = new Cliente("Ana", 97699999999); // Usando o construtor
const contaCorrenteCliente3 = new contaCorrente(1001, cliente3);

const cliente4 = new Cliente("Ana", 97699999999); // Usando o construtor
const contaCorrenteCliente4 = new contaCorrente(1001, cliente4);

console.log(contaCorrenteCliente1);
console.log(contaCorrenteCliente2);
console.log(contaCorrenteCliente3);
console.log(contaCorrenteCliente4);
console.log(`Atualmente, o ByteBank possui ${contaCorrente.numeroDeContas} contas ativas.`);


// const conta2 = new contaCorrente()
// conta2.cliente = cliente1// conta2.agencia = 120;

// console.log(conta2.cliente);
// console.log(conta2.saldo);
// cliente1.cpf = 1


// contaCorrenteAna.agencia = 1001;
// contaCorrenteAna.cliente = cliente2

// contaCorrenteDaniel.depositar(500)
// console.log(contaCorrenteDaniel);

// let valor = 150
// contaCorrenteDaniel.transferir(valor, contaCorrenteAna)
// console.log(contaCorrenteDaniel);
// console.log(contaCorrenteAna);



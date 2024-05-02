class Cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;    
        }
    }
}


const cliente1 = new Cliente();

cliente1.nome = "Daniel";
cliente1.cpf = 99999999999;

const cliente2 = new Cliente();

cliente2.nome = "Ana";
cliente2.cpf = 99999976759;

// console.log(cliente1, cliente2);

const contaCorrenteDaniel = new contaCorrente();

contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel.saldo = 200000000;
contaCorrenteDaniel.sacar(15000)
console.log(contaCorrenteDaniel.saldo);

















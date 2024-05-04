export class Conta {
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor){
        taxa = valor * 1.1;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return; 
        this._saldo += valor;           
    }

    tranferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}
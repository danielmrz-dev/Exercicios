import { Cliente } from "../Cliente.js";


// "Conta" é uma classe abstrata que serve apenas de modelo para ser usada por outras classes. Uma classe abstrata não pode/deve ser instanciada.
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo CONTA, pois esta é uma classe abstrata.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Este "sacar" é um método abstrato. Ele existe para poder ser chamado por outras classes, mas elas precisam especificar os detalhes do método
    sacar(valor){ 
        throw new Error("O método Sacar é abstrato.")
        // let taxa = 1;
        // return this._sacar(valor, taxa);
    }
    
    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        this._saldo += valor;           
    }

    tranferir(valor, conta){        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
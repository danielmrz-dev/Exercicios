import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    private inputData: HTMLInputElement | null;
    private inputQuantidade: HTMLInputElement | null;
    private inputValor: HTMLInputElement | null;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this.inputData = <HTMLInputElement>document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        if (this.inputData && this.inputQuantidade && this.inputValor) {
            const negociacao = Negociacao.criaDe(
                this.inputData.value,
                this.inputQuantidade.value,
                this.inputValor.value,
            )
            
            if (!this.ehDiaUtil(negociacao.data)) {
                this.mensagemView
                    .update('Apenas negociações em dias úteis são aceitas');
                return ;
            }
            this.negociacoes.adiciona(negociacao);
            this.limparFormulario();
            this.atualizaView();
        }

    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO 
            && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        if (this.inputData && this.inputQuantidade && this.inputValor) {
            this.inputData.value = '';
            this.inputQuantidade.value = '';
            this.inputValor.value = '';
            this.inputData.focus();
        }
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
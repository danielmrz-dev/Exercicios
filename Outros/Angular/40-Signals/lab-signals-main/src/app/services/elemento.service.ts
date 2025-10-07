import { computed, effect, Injectable, signal } from '@angular/core';

export interface IElemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
  pontoFusao: number;
  pontoEbulicao: number;
}

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  elementoSelecionado = signal<IElemento | null>(null);
  temperatura = signal<number>(25);
  estadoFisico = signal<string>('');

  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: ${elemento.simbolo}, Número de massa: ${elemento.numeroMassa}.`
      : 'Nenhum elemento foi selecionado.'
  })

  elementos: IElemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroMassa: 1, pontoFusao: -259, pontoEbulicao: -253 },
    { nome: 'Carbono', simbolo: 'C', numeroMassa: 12, pontoFusao: 3550, pontoEbulicao: 4027 },
    { nome: 'Oxigênio', simbolo: 'O', numeroMassa: 16, pontoFusao: -218, pontoEbulicao: -183 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroMassa: 14, pontoFusao: -210, pontoEbulicao: -196 },
    { nome: 'Fósforo', simbolo: 'P', numeroMassa: 31, pontoFusao: 44, pontoEbulicao: 280 },
    { nome: 'Enxofre', simbolo: 'S', numeroMassa: 32, pontoFusao: 115, pontoEbulicao: 445 }
  ];

  constructor() {
    effect(() => {
      const elemento = this.elementoSelecionado();
      const temp = this.temperatura();

      if (elemento) {
        let estadoFisico = '';
        if (temp < elemento.pontoFusao) {
          estadoFisico = 'Sólido'
        } else if (temp >= elemento.pontoFusao && temp < elemento.pontoEbulicao) {
          estadoFisico = 'Líquido'
        } else {
          estadoFisico = 'Gasoso'
        }
        this.estadoFisico.set(estadoFisico);
      }

    }, { allowSignalWrites: true })
  }

  selecionarElemento(elemento: IElemento): void {
    this.elementoSelecionado.set(elemento);
  }

  ajustarTemperatura(novaTemp: number): void {
    this.temperatura.set(novaTemp);
  }
}

import { computed, effect, Injectable, signal, untracked } from '@angular/core';

export interface IElemento {
  nome: string;
  simbolo: string;
  numeroMassa: number;
  pontoFusao: number;
  pontoEbulicao: number;
  numeroNeutrons: number;
  numeroAtomico: number;
}

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  elementoSelecionado = signal<IElemento | null>(null);
  elementoCalculado1 = signal<IElemento | null>(null);
  elementoCalculado2 = signal<IElemento | null>(null);
  temperatura = signal<number>(25);
  estadoFisico = signal<string>('');
  favoritos = signal<IElemento[]>([]);

  elementoInfo = computed(() => {
    const elemento = this.elementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome}, Símbolo: ${elemento.simbolo}, Número de massa: ${elemento.numeroMassa}.`
      : 'Nenhum elemento foi selecionado.'
  });

  massaAtomicaTotal = computed(() => {
    const elemento1 = this.elementoCalculado1();
    const elemento2 = this.elementoCalculado2();

    const massa1 = untracked(() => elemento1
      ? elemento1.numeroAtomico + elemento1.numeroNeutrons
      : 0);
    const massa2 = untracked(() => elemento2
      ? elemento2.numeroAtomico + elemento2.numeroNeutrons
      : 0);

    return massa1 + massa2;
  })


  elementos: IElemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1, numeroNeutrons: 0, numeroMassa: 1, pontoFusao: -259, pontoEbulicao: -253 },
    { nome: 'Carbono', simbolo: 'C', numeroAtomico: 6, numeroNeutrons: 6, numeroMassa: 12, pontoFusao: 3550, pontoEbulicao: 4027 },
    { nome: 'Nitrogênio', simbolo: 'N', numeroAtomico: 7, numeroNeutrons: 7, numeroMassa: 14, pontoFusao: -210, pontoEbulicao: -196 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8, numeroNeutrons: 8, numeroMassa: 16, pontoFusao: -218, pontoEbulicao: -183 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11, numeroNeutrons: 12, numeroMassa: 23, pontoFusao: 98, pontoEbulicao: 883 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17, numeroNeutrons: 18, numeroMassa: 35, pontoFusao: -101, pontoEbulicao: -34 }
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

  selecionarElemento1(elemento: IElemento): void {
    this.elementoCalculado1.set(elemento);
  }
  
  selecionarElemento2(elemento: IElemento): void {
    this.elementoCalculado2.set(elemento);
  }

  ajustarTemperatura(novaTemp: number): void {
    this.temperatura.set(novaTemp);
  }

  obterFavoritos() {
    return this.favoritos();
  }

  obterElementoSelecionado() {
    return this.elementoSelecionado();
  }

  adicionarFavorito(elemento: IElemento) {
    this.favoritos.update((favoritos) => [...favoritos, elemento])
  }

  removerFavorito(elemento: IElemento) {
    this.favoritos.update((favoritos) => favoritos.filter(favorito => favorito !== elemento))
  }



}

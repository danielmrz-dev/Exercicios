import { Component, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card', // NOME TA TAG A SER USADA NO HTML
  templateUrl: './card.component.html', // ESTRUTURA HTML DO COMPONENTE
  styleUrl: './card.component.css', // ESTILOS DO COMPONENTE
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CardComponent {
  
  // @ts-ignore
  plano: IPlano = {
    infos: {
      tipo: "Simples",
      preco: 100
    }
  };

}

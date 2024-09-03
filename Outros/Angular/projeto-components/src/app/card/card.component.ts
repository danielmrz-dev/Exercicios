import { Component, Input, ViewEncapsulation } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  
  @Input("type") planType: string = ''
  @Input({ required: true, alias: "price" }) planPrice: number = 0

}

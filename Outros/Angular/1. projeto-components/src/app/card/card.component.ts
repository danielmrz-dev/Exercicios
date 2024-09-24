import { Component, Input, numberAttribute, ViewEncapsulation } from '@angular/core';

function handlePlanType(value: string) {
  return value.toUpperCase();
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  
  @Input({ required: true, alias: "price"}) planPrice: number = 0
  @Input({ alias: 'type', transform: (value: string) => handlePlanType(value) }) planType: string = ''

  // private _planType: string = ''

  // set planType(value: string) {
  //   this._planType = value.toUpperCase();
  // }

  // get planType(): string {
  //   return this._planType;
  // }  

  buttonClicked(valueEmmited: boolean) {
    console.log("Botão clicado", valueEmmited);    
    console.log(this.planType);
    
  }

}

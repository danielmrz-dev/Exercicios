import { Component, EventEmitter, Input, Output } from '@angular/core';

function formatarMoeda(value: number): string {
  return value.toLocaleString("pt-br", {currency: "BRL", style: "currency"})
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({required: true, alias: 'type'})
  planType: string = ''

  @Input({
    required: true, 
    alias: 'price',
    transform: (value: number) => formatarMoeda(value)
  })
  planPrice: string = ''

  @Input({required: true})
  cardStyle: 'orange' | 'purple' = 'orange'

  @Output('buttonClicked') 
  buttonClickedEmit = new EventEmitter<void>()

  onButtonClicked() {
    this.buttonClickedEmit.emit()
  }
}

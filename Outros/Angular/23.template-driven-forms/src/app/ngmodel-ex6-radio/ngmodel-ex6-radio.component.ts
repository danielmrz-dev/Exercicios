import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel-ex6-radio',
  templateUrl: './ngmodel-ex6-radio.component.html',
  styleUrl: './ngmodel-ex6-radio.component.scss'
})
export class NgmodelEx6RadioComponent {
  radioSelection: string = '';

  onChange(selecao: string) {
    this.radioSelection = selecao
  }
}

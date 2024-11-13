import { Component } from '@angular/core';

@Component({
  selector: 'app-ngmodel-ex1',
  templateUrl: './ngmodel-ex1.component.html',
  styleUrl: './ngmodel-ex1.component.scss'
})
export class NgmodelEx1Component {
  title = '';

  mudaTexto(texto: string) {
    this.title = texto
  }
}

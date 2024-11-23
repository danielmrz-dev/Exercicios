import { Component } from '@angular/core';

interface Pais {
  id: number,
  description: string
}
@Component({
  selector: 'app-ngmodel-ex5-select',
  templateUrl: './ngmodel-ex5-select.component.html',
  styleUrl: './ngmodel-ex5-select.component.scss'
})
export class NgmodelEx5SelectComponent {
  nacionalidadeSelecionada: number | undefined
  nacionalidades: Pais[] = [
    {
      id: 1,
      description: "Brasileiro"
    },
    {
      id: 2,
      description: "Argentino"
    },
    {
      id: 3,
      description: "Nepalês"
    }
  ]
  
  onChange(id: string) {
    this.nacionalidadeSelecionada = +id
  }
}

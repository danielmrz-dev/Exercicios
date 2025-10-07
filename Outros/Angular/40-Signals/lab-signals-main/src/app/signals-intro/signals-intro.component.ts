import { Component, inject, signal } from '@angular/core';
import { ElementoService, IElemento } from '../services/elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css']
})
export class SignalsIntroComponent {

  protected readonly elementoService = inject(ElementoService);

  selecionarElemento(elemento: IElemento): void {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(novaTemp: number): void {
    this.elementoService.ajustarTemperatura(novaTemp)
  }
}

import { CommonModule } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ElementoService, IElemento } from '../services/elemento.service';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './effects.component.html',
  styleUrl: './effects.component.css'
})
export class EffectsComponent {

  protected readonly elementoService = inject(ElementoService);

  selecionarElemento(elemento: IElemento): void {
    this.elementoService.selecionarElemento(elemento);
  }

  ajustarTemperatura(novaTemp: number): void {
    this.elementoService.ajustarTemperatura(novaTemp);
  }
}

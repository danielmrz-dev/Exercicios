import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ElementoService, IElemento } from '../services/elemento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-elementos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaElementosComponent {

  protected readonly elementoService = inject(ElementoService);

  selecionarElemento(elemento: IElemento) {
    this.elementoService.selecionarElemento(elemento)
  }

  alternarFavorito(elemento: IElemento) {
    if (this.elementoService.obterFavoritos().includes(elemento)) {
      this.elementoService.removerFavorito(elemento);
    } else {
      this.elementoService.adicionarFavorito(elemento);
    }
  }
}

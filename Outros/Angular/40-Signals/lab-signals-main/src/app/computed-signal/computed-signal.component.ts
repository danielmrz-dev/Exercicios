import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ElementoService, IElemento } from '../services/elemento.service';

@Component({
  selector: 'app-computed-signal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './computed-signal.component.html',
  styleUrl: './computed-signal.component.css'
})
export class ComputedSignalComponent {

  protected readonly elementoService = inject(ElementoService);

  elementos: IElemento[] = [];

  ngOnInit(): void {
    this.elementos = this.elementoService.elementos;
  }
}

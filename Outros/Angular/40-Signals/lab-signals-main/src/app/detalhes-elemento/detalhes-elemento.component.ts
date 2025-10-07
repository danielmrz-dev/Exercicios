import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ElementoService } from '../services/elemento.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-elemento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-elemento.component.html',
  styleUrl: './detalhes-elemento.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalhesElementoComponent {

  protected readonly elementoService = inject(ElementoService);
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ExemploService } from '../../services/exemplo.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent {
  
  textoInterno: string = 'Texto interno';
  @Input({ required: true }) textoDoComponentePai: string = 'Texto do componente pai';
  
  novoTexto(novoTexto: string) {
    this.textoInterno = novoTexto;
  }

  pessoas$: Observable<any> = of();

  constructor(private readonly exemploService: ExemploService) {}
  
}

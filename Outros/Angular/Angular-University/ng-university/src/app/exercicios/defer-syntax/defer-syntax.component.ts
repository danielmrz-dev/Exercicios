import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ExemploService } from '../../services/exemplo.service';
import { Observable } from 'rxjs';
import { ContentProjectionComponent } from "../content-projection/content-projection.component";

@Component({
  selector: 'app-defer-syntax',
  standalone: true,
  imports: [CommonModule, ContentProjectionComponent],
  templateUrl: './defer-syntax.component.html',
  styleUrl: './defer-syntax.component.scss'
})
export class DeferSyntaxComponent {
  
  projetos$!: Observable<any>;
  
  private readonly projetosService = inject(ExemploService);

  ngOnInit(): void {
    this.projetos$ = this.projetosService.getProjetos();
  }

}

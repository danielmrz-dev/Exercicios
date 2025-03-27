import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken } from '@angular/core';
import { ExemploService } from '../../services/exemplo.service';

function serviceProvider(http: HttpClient) {
  return new ExemploService();
}

const EXEMPLO_SERVICE = new InjectionToken<ExemploService>('EXEMPLO_SERVICE')

@Component({
  selector: 'app-dependency-injection',
  standalone: true,
  imports: [],
  templateUrl: './dependency-injection.component.html',
  styleUrl: './dependency-injection.component.scss',
  providers: [
    {
      provide: EXEMPLO_SERVICE,
      useFactory: serviceProvider,
      deps: [HttpClient]
    }
  ]
})
export class DependencyInjectionComponent {

  constructor(@Inject(EXEMPLO_SERVICE) private readonly exemploService: ExemploService) {}

}

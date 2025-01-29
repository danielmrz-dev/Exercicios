import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservablesService } from './services/observables.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly observablesService = inject(ObservablesService)

  ngOnInit(): void {
    // firstValueFrom(this.observablesService.teste())
    //   .then((resposta) => {
    //     console.log('Observable transformado em promise', resposta);
    //   })

    // this.observablesService.teste().subscribe((valor) => {
    //   console.log('Observable inscrito', valor);      
    // })

    this.observablesService.getUsers().subscribe({
      next(value) {
        console.log(value);
      },
      error(err) {
        console.log(err);
        
      },
      
      
    })
  }
}

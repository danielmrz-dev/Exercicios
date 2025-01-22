import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private readonly router = inject(Router)

  goToInitialPage() {
    this.router.navigate(['initial'], {
      queryParams: {
        isActive: true,
        isAdmin: false,
      }
    })
  }

  goToContactsPage() {
    this.router.navigate(['contacts'])
  }
  goToInformationPage() {
    this.router.navigate(['information'], {
      queryParams: {
        nome: "Maria",
        idade: 30,
      }
    })
  }
  goToCardsPage() {
    this.router.navigate(['cards'])
  }
  
}

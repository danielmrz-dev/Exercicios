import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {

  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute)

goToDebitCardPage() {
  this.router.navigate(['debit'], { relativeTo: this.activatedRoute })
}

goToCreditCardPage() {
  this.router.navigate(['credit'], { relativeTo: this.activatedRoute })
}

}

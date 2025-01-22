import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent {
private readonly router = inject(Router)
private readonly activatedRoute = inject(ActivatedRoute)

  redirectToCreditCardPage() {
    // this.router.navigate(['cards', 'credit'])
    this.router.navigate(['../credit'], { relativeTo: this.activatedRoute})
  }

}

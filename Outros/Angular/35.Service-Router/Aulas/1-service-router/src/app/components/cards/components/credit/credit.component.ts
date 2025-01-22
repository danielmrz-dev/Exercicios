import { Component, inject } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent {
  private readonly router = inject(Router)
  private readonly activatedRoute = inject(ActivatedRoute)
  redirectToDebitCardPage() {
    this.router.navigate(['../debit'], { relativeTo: this.activatedRoute })
  }
}

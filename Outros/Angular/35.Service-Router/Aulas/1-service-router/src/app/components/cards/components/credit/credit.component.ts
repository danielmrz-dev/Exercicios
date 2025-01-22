import { Component, inject, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"
import { CardsList, ICard, UserCardsListService } from "../../../../services/user-cards-list.service"
import { Observable, of } from "rxjs"
import { AsyncPipe, CommonModule } from "@angular/common"

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.scss'
})
export class CreditComponent implements OnInit {
  private readonly _router = inject(Router)
  private readonly _activatedRoute = inject(ActivatedRoute)
  private readonly _usersCardsListService = inject(UserCardsListService)

  userCreditCardsList$: Observable<CardsList> = of([])

  ngOnInit(): void {
    this.userCreditCardsList$ = this._usersCardsListService.getUserCardsByType('credito')
  }

    navigateToCard(card: ICard) {
      this._router.navigate(['../', card.id], { relativeTo: this._activatedRoute })
    }
  redirectToDebitCardPage() {
    this._router.navigate(['../debit'], { relativeTo: this._activatedRoute })
  }

}

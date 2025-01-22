import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CardsList, ICard, UserCardsListService } from '../../../../services/user-cards-list.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-debit',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './debit.component.html',
  styleUrl: './debit.component.scss'
})
export class DebitComponent implements OnInit {

  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _usersCardsListService = inject(UserCardsListService);

  userDebitCards$: Observable<CardsList> = of([]);

  ngOnInit(): void {
    this.userDebitCards$ = this._usersCardsListService.getUserCardsByType('debito')
  }

  navigateToCard(card: ICard) {
    this._router.navigate(['../', card.id], { relativeTo: this._activatedRoute })
  }

  redirectToCreditCardPage() {
    // this.router.navigate(['cards', 'credit'])
    this._router.navigate(['../credit'], { relativeTo: this._activatedRoute})
  }

}

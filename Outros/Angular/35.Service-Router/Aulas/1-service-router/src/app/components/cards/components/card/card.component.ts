import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ICard, UserCardsListService } from '../../../../services/user-cards-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  private readonly _userCardsListService = inject(UserCardsListService)

  card$: Observable<ICard | undefined> = of({} as ICard)

  @Input() set cardId(newCardId: string) {
    this.card$ = this._userCardsListService.getUserCardById(+newCardId)
  }

}

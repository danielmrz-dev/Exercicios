import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/auth.reducers';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-feed-toggler',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './feed-toggler.html',
  styleUrl: './feed-toggler.scss'
})
export class FeedToggler {
  @Input() tagName?: string;

  private readonly store = inject(Store);

  currentUser$ = this.store.select(selectCurrentUser);


}

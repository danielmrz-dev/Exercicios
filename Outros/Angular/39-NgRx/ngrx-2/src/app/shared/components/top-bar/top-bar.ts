import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/auth.reducers';
import { combineLatest } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, CommonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  standalone: true
})
export class TopBar {

  private readonly store = inject(Store);
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })

}

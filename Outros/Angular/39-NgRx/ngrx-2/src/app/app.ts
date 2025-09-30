import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from "./shared/components/top-bar/top-bar";
import { Store } from '@ngrx/store';
import { authActions } from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App implements OnInit {
  private readonly store = inject(Store);

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
}

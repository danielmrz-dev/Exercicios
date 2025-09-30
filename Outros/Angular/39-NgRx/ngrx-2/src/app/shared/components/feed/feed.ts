import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/feed.actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/feed.reducers';
import { CommonModule } from '@angular/common';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed',
  imports: [CommonModule, ɵInternalFormsSharedModule, RouterLink],
  templateUrl: './feed.html',
  styleUrl: './feed.scss'
})
export class Feed implements OnInit {

  @Input() apiUrl: string = '';

  private readonly store = inject(Store);

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  })

  ngOnInit(): void {
    this.store.dispatch(
      feedActions.getFeed({ url: this.apiUrl })
    )
  }
}

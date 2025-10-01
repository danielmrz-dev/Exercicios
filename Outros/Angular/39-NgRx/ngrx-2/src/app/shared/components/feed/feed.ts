import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { feedActions } from './store/feed.actions';
import { combineLatest } from 'rxjs';
import { selectError, selectFeedData, selectIsLoading } from './store/feed.reducers';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ErrorMessage } from "../error-message/error-message";
import { Loading } from "../loading/loading";
import { Pagination } from "../pagination/pagination";

@Component({
  selector: 'app-feed',
  imports: [
    CommonModule, 
    RouterLink,
    ErrorMessage, 
    Loading, 
    Pagination
  ],
  templateUrl: './feed.html',
  styleUrl: './feed.scss'
})
export class Feed implements OnInit {

  @Input() apiUrl: string = '';

  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 0;

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  })

  ngOnInit(): void {
    this.store.dispatch(
      feedActions.getFeed({ url: this.apiUrl })
    )

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1')
    })
  }
}

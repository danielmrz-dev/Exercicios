import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { articleActions } from './store/article.actions';
import { combineLatest, filter, map } from 'rxjs';
import { selectArticleData, selectError, selectIsLoading } from './store/article.reducers';
import { selectCurrentUser } from '../../../auth/store/auth.reducers';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { CommonModule } from '@angular/common';
import { Loading } from "../../../shared/components/loading/loading";
import { ErrorMessage } from '../../../shared/components/error-message/error-message';
import { TagList } from "../../../shared/components/tag-list/tag-list";

@Component({
  selector: 'app-article',
  imports: [CommonModule, RouterLink, Loading, ErrorMessage, TagList],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article implements OnInit {

  private readonly store = inject(Store);
  private readonly activatedRoute = inject(ActivatedRoute);

  isAuthor$ = combineLatest({
    article: this.store.select(selectArticleData),
    currentUser: this.store.select(selectCurrentUser).pipe(
      filter((currentUser): currentUser is ICurrentUser | null => {
        return currentUser !== undefined
      })
    )
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) {
        return false;
      }

      return article.author.username === currentUser.username
    })
  );

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectArticleData),
    isAuthor: this.isAuthor$
  });

  slug = this.activatedRoute.snapshot.paramMap.get('slug') ?? '';


  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({ slug: this.slug }))
  }

  deleteArticle(): void {
    this.store.dispatch(articleActions.deleteArticle({ slug: this.slug }))
  }
}

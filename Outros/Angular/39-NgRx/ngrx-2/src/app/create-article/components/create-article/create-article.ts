import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IArticleForm } from '../../../shared/types/article-form-values.interface';
import { ArticleForm } from "../../../shared/components/article-form/article-form";
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { selectIsSubmitting, selectValidationErrors } from '../../store/create-article.reducers';
import { IArticleRequest } from '../../../shared/types/article-request.interface';
import { createArticleActions } from '../../store/create-article.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-article',
  imports: [ReactiveFormsModule, ArticleForm, CommonModule],
  templateUrl: './create-article.html',
  styleUrl: './create-article.scss',
})
export class CreateArticle {

  private readonly store = inject(Store);

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors)
  })

  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  onSubmit(articleFormValues: IArticleForm): void {
    const request: IArticleRequest = {
      article: articleFormValues
    };

    this.store.dispatch(createArticleActions.createArticle({ request }));
  }
}

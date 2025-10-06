import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable, filter, map, combineLatest } from "rxjs";
import { selectArticle } from "../../../article/components/article/store/article.reducers";
import { ArticleForm } from "../../../shared/components/article-form/article-form";
import { Loading } from "../../../shared/components/loading/loading";
import { IArticleForm } from "../../../shared/types/article-form-values.interface";
import { IArticleRequest } from "../../../shared/types/article-request.interface";
import { IArticle } from "../../../shared/types/article.interface";
import { editArticleActions } from "../../store/edit-article.actions";
import { selectIsLoading, selectIsSubmitting, selectValidationErrors } from "../../store/edit-article.reducers";


@Component({
  selector: 'app-edit-article',
  imports: [Loading, CommonModule, ArticleForm],
  templateUrl: './edit-article.html',
  styleUrl: './edit-article.scss'
})
export class EditArticle implements OnInit {

  private readonly store = inject(Store);
  private readonly route = inject(ActivatedRoute);

  initialValues$: Observable<IArticleForm> = this.store.pipe(
    select(selectArticle),
    filter((article): article is IArticle => article !== null),
    map((article) => {
      return {
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList,
      }
    })
  )

  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  data$ = combineLatest({
    initialValues: this.initialValues$,
    isSubmitting: this.store.select(selectIsSubmitting),
    isLoading: this.store.select(selectIsLoading),
    backendErrors: this.store.select(selectValidationErrors)
  })

  ngOnInit(): void {
    this.store.dispatch(editArticleActions.getArticle({ slug: this.slug }));
  }

  onSubmit(articleFormValues: IArticleForm): void {
    const request: IArticleRequest = {
      article: articleFormValues
    };
    this.store.dispatch(editArticleActions.editArticle({ request, slug: this.slug }));
  }
}

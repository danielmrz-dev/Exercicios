import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ArticleService } from "../../../../shared/services/article.service";
import { articleActions } from "./article.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";

export const getArticleEffect = createEffect((
    actions$ = inject(Actions),
    articleService = inject(ArticleService)
) => {
    return actions$.pipe(
        ofType(articleActions.getArticle),
        switchMap(({ slug }) => {
            return articleService.getArticle(slug).pipe(
                map((article) => articleActions.getArticleSuccess({ article }))
            )
        }),
        catchError(() => {
            return of(articleActions.getArticleFailure())
        })
    )
}, { functional: true });

export const deleteArticleEffect = createEffect((
    actions$ = inject(Actions),
    articleService = inject(ArticleService)
) => {
    return actions$.pipe(
        ofType(articleActions.deleteArticle),
        switchMap(({ slug }) => {
            return articleService.deleteArticle(slug).pipe(
                map(() => articleActions.deleteArticleSuccess())
            );
        }),
        catchError(() => {
            return of(articleActions.deleteArticleFailure());
        })
    )
}, { functional: true })

export const redirectAfterDeleteEffect = createEffect((
    actions$ = inject(Actions),
    router = inject(Router)
) => {
    return actions$.pipe(
        ofType(articleActions.deleteArticleSuccess),
        tap(() => {
            router.navigateByUrl('/')
        })
    )
}, { dispatch: false, functional: true })
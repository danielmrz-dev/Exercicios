import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { editArticleActions } from "./edit-article.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { IArticle } from "../../shared/types/article.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { EditArticleService } from "../../shared/services/edit-article.service";
import { ArticleService } from "../../shared/services/article.service";

export const getArticleEffect = createEffect((
    actions$ = inject(Actions),
    articleService = inject(ArticleService)
) => {
    return actions$.pipe(
        ofType(editArticleActions.getArticle),
        switchMap(({ slug }) => {
            return articleService.getArticle(slug).pipe(
                map((article) => editArticleActions.getArticleSuccess({ article }))
            )
        }),
        catchError(() => {
            return of(editArticleActions.getArticleFailure())
        })
    )
}, { functional: true });

export const editArticleEffects = createEffect((
    actions$ = inject(Actions),
    editArticleService = inject(EditArticleService)
) => {
    return actions$.pipe(
        ofType(editArticleActions.editArticle),
        switchMap(({ request, slug }) => {
            return editArticleService.updateArticle(request, slug).pipe(
                map((article: IArticle) => {
                    return editArticleActions.editArticleSuccess({ article })
                })
            )
        }),
        catchError((error: HttpErrorResponse) => {
            return of(editArticleActions.editArticleFailure({
                errors: error.error.errors
            }))
        })
    )
}, { functional: true });

export const redirectAfterEditArticle = createEffect((
    actions$ = inject(Actions),
    router = inject(Router)
) => {
    return actions$.pipe(
        ofType(editArticleActions.editArticleSuccess),
        tap(({ article }) => {
            router.navigate(['/articles', article.slug])
        })
    )
}, { functional: true, dispatch: false })
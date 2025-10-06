import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CreateArticleService } from "../../shared/services/create-article.service";
import { createArticleActions } from "./create-article.actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { IArticle } from "../../shared/types/article.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

export const createArticleEffects = createEffect((
    actions$ = inject(Actions),
    createArticleService = inject(CreateArticleService)
) => {
    return actions$.pipe(
        ofType(createArticleActions.createArticle),
        switchMap(({ request }) => {
            return createArticleService.createArticle(request).pipe(
                map((article: IArticle) => {
                    return createArticleActions.createArticleSuccess({ article })
                })
            )
        }),
        catchError((error: HttpErrorResponse) => {
            return of(createArticleActions.createArticleFailure({ 
                errors: error.error.errors
            }))
        })
    )
}, { functional: true });

export const redirectAfterCreateArticle = createEffect((
    actions$ = inject(Actions),
    router = inject(Router)
) => {
    return actions$.pipe(
        ofType(createArticleActions.createArticleSuccess),
            tap(({ article }) => {
                router.navigate(['/articles', article.slug])
            })
    )
}, { functional: true, dispatch: false })
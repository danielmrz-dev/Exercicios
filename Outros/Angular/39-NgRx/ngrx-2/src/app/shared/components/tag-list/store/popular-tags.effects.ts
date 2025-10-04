import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PopularTagService } from "../../../services/popular-tag.service";
import { popularTagsActions } from "./popular-tags.actions";
import { catchError, map, of, switchMap } from "rxjs";

export const getPopularTagsEffect = createEffect((
    actions$ = inject(Actions),
    popularTagsService = inject(PopularTagService)
) => {
    return actions$.pipe(
        ofType(popularTagsActions.getTagList),
        switchMap(() => {
            return popularTagsService.getPopularTags().pipe(
                map((popularTags) => {
                    return popularTagsActions.getTagListSuccess({ popularTags })
                })
            );
        }),
        catchError(() => {
            return of(popularTagsActions.getTagListFailure());
        })
    )
}, { functional: true })
import { inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { switchMap, of, map, catchError } from "rxjs";
import { authActions } from "../../../../auth/store/auth.actions";
import { feedActions } from "./feed.actions";
import { FeedService } from "../../../services/feed.service";

export const getFeedEffect = createEffect((
    actions$ = inject(Actions),
    feedService = inject(FeedService),
) => {
    return actions$.pipe(
        ofType(feedActions.getFeed),
        switchMap(({ url }) => {
            return feedService.getFeed(url).pipe(
                map((feed) => {
                    return feedActions.getFeedSuccess({ feed })
                }),
                catchError(() => {
                    return of(feedActions.getFeedFailure());
                })
            );
        }
        )
    )
}, { functional: true })
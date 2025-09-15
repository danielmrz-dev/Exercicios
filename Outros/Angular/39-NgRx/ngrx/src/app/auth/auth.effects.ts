import { inject, Injectable, OnInit } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./action-types";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {

    private readonly actions$ = inject(Actions);
    private readonly router = inject(Router);

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            tap((action) => {
                localStorage.setItem('user', JSON.stringify(action.user));
                this.router.navigateByUrl('/courses');
            })
        );
    }, { dispatch: false });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.logout),
            tap(() => {
                localStorage.removeItem('user');
                this.router.navigateByUrl('/login')

            })
        )
    }, { dispatch: false })

}
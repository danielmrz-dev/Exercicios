import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { isLoggedIn } from "./auth.selectors";
import { tap } from "rxjs/operators";


@Injectable()
export class AuthGuard implements CanActivate {

    private readonly store = inject(Store<AppState>);
    private readonly router = inject(Router);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        
        return this.store.pipe(
            select(isLoggedIn),
            tap((loggedIn) => {
                if (!loggedIn) {
                    this.router.navigateByUrl('/login');
                }
            })
        )
    }

}
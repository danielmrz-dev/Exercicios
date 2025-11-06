import { inject, Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate, CanActivateChild {
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> {
    return this.checkIfUserIsLoggedIn();
  }

  canActivateChild(): Observable<boolean | UrlTree> {
    return this.checkIfUserIsLoggedIn();
  }

  private checkIfUserIsLoggedIn(): Observable<boolean | UrlTree> {
    return this.authStore.isLoggedIn$.pipe(
      map((isLoggedIn) => (isLoggedIn ? true : this.router.parseUrl("/login")))
    );
  }
}

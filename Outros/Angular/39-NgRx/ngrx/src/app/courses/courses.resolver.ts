import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../reducers";
import { finalize, first, tap } from "rxjs/operators";
import { CourseActions } from "./action-types";

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;
    private readonly store = inject(Store<AppState>);

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {

        return this.store.pipe(
            tap(() => {
                if (!this.loading) {
                    this.loading = true;
                    this.store.dispatch(CourseActions.loadAllCourses());                    
                }
            }),
            first(),
            finalize(() => {
                this.loading = false;
            })
        )
    }
}
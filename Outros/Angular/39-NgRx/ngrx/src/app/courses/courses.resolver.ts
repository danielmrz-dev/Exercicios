import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { CoursesEntityService } from "./services/courses-entity.service";

@Injectable()
export class CoursesResolver implements Resolve<boolean> {

    loading = false;
    private readonly coursesService = inject(CoursesEntityService);

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.coursesService.loaded$.pipe(
            tap((loaded) => {
                if (!loaded) {
                    this.coursesService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first(),
        )
    }
}
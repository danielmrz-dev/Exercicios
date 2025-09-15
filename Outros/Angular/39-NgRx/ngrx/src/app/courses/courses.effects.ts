import { inject, Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { CourseActions } from "./action-types";
import { CoursesHttpService } from "./services/courses-http.service";
import { concatMap, map } from "rxjs/operators";

@Injectable()
export class CoursesEffects {
    
    private readonly actions$ = inject(Actions);
    private readonly coursesHttpService = inject(CoursesHttpService);

    loadCourses$ = this.actions$.pipe(
        ofType(CourseActions.loadAllCourses),
        concatMap((action) => {
            return this.coursesHttpService.findAllCourses();
        }),
        map((courses) => {
            return CourseActions.allCoursesLoaded({ courses })
        })
    )

}
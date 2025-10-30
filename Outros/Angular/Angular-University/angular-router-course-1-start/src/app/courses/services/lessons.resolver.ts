import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
} from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";
import { LessonSummary } from "../model/lesson-summary";

@Injectable()
export class LessonsResolver implements Resolve<LessonSummary[]> {
  
  coursesService = inject(CoursesService);

  resolve(route: ActivatedRouteSnapshot): MaybeAsync<LessonSummary[] | RedirectCommand> {
    const courseurl = route.paramMap.get("courseUrl");
    return this.coursesService.loadAllCourseLessonsSummary(courseurl);
  }
}

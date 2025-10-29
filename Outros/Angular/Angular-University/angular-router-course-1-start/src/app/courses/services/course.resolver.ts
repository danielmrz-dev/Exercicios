import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
} from "@angular/router";
import { Course } from "../model/course";
import { inject, Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";

@Injectable()
export class CourseResolver implements Resolve<Course> {
  coursesService = inject(CoursesService);

  resolve(route: ActivatedRouteSnapshot): MaybeAsync<Course | RedirectCommand> {
    const courseurl = route.paramMap.get("courseUrl");
    return this.coursesService.loadCourseByUrl(courseurl);
  }
}

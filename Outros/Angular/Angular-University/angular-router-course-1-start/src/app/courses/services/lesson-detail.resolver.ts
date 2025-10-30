import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
} from "@angular/router";
import { inject, Injectable } from "@angular/core";
import { CoursesService } from "./courses.service";
import { LessonDetail } from "../model/lesson-detail";

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail> {
  
  coursesService = inject(CoursesService);

  resolve(route: ActivatedRouteSnapshot): MaybeAsync<LessonDetail | RedirectCommand> {
    const courseurl = route.parent.paramMap.get("courseUrl"),
    lessonSeqNo = route.paramMap.get("lessonSeqNo");
    return this.coursesService.loadLessonDetail(courseurl, lessonSeqNo);
  }
}

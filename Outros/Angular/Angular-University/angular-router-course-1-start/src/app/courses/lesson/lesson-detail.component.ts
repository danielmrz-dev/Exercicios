import { Component, inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "lesson",
  templateUrl: "./lesson-detail.component.html",
  standalone: false,
  styleUrls: ["./lesson-detail.component.css"],
})
export class LessonDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  lesson$: Observable<LessonDetail>;

  ngOnInit() {
    this.lesson$ = this.route.data.pipe(map((data) => data["lesson"]));
  }

  previous(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo - 1], {
      relativeTo: this.route.parent,
    });
  }

  next(lesson: LessonDetail) {
    this.router.navigate(["lessons", lesson.seqNo + 1], {
      relativeTo: this.route.parent,
    });
  }
}

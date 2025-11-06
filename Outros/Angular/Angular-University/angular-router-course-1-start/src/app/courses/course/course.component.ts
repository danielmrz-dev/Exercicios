import { Component, inject, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
  standalone: false,
})
export class CourseComponent implements OnInit {
  route = inject(ActivatedRoute);
  course: Course;
  couponCode: string;

  ngOnInit() {
    this.course = this.route.snapshot.data["course"];
    this.couponCode = this.route.snapshot.queryParamMap.get('couponCode');
    console.log(this.route.snapshot.queryParamMap); 
  }

  confirmExit(): boolean {
    return confirm(
      `Are you sure that you want to exit ${this.course.description}?`
    );
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true
  })
  course: Course;
  
  @Output()
  courseSelected = new EventEmitter<Course>();
  
  
  onCourseViewed() {
    this.courseSelected.emit(this.course)
  }

}
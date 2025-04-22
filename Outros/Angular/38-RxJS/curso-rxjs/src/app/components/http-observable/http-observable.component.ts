import { Component, OnInit } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { createObservable } from '../../utils/create-observable';
import { IUser } from '../../models/user.interface';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/courses.interface';
import { courses } from '../../utils/data';

@Component({
  selector: 'app-http-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-observable.component.html',
  styleUrl: './http-observable.component.scss'
})
export class HttpObservableComponent implements OnInit {
  
  private readonly api = "https://jsonplaceholder.typicode.com/users";
  users: IUser[] = [];
  backEndCourses$: Observable<Course[]> = of([]);
  programmingCourses$: Observable<Course[]> = of([]);

  ngOnInit(): void {
    
    const http$ = createObservable(this.api);
    const courses$ = of(courses);

    this.backEndCourses$ = courses$.pipe(
      map(
        courses => courses.filter(course => course.category === 'programação')
      )
    )

    this.backEndCourses$ = courses$.pipe(
      map(
        courses => courses.filter(course => course.category === 'programação')
      )
    )

    http$.subscribe({
      next: (response: any) => {
        console.log(response);
        this.users = response;
      },
      error: (error) => {
        console.log("Deu ruim", error);
      },
      complete() {
        console.log("Cabou!");
      },
    })

  }
}


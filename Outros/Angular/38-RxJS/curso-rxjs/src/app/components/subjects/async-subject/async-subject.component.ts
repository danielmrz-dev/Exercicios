import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  standalone: true,
  imports: [],
  templateUrl: './async-subject.component.html',
  styleUrl: './async-subject.component.scss'
})
export class AsyncSubjectComponent {

  ngOnInit(): void {
    const asyncSubject = new AsyncSubject<number>();
    const obs$ = asyncSubject.asObservable();

    obs$.subscribe((val) => {
      console.log("Async Subject => Early: ", val);
    })

    asyncSubject.next(2);
    asyncSubject.next(3);
    asyncSubject.next(4);
    asyncSubject.complete();

    setTimeout(() => {
      obs$.subscribe((val) => {
        console.log("Async Subject => Late: ", val);
      })
    }, 500);

  }
}

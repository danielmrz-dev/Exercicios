import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  standalone: true,
  imports: [],
  templateUrl: './behaviour-subject.component.html',
  styleUrl: './behaviour-subject.component.scss'
})
export class BehaviourSubjectComponent {

  ngOnInit(): void {
    
    const behaviourSubject = new BehaviorSubject<number>(1);
    const obs$ = behaviourSubject.asObservable();

    obs$.subscribe((val) => {
      console.log("Behaviour SUBJECT => Early: ", val);
    })

    behaviourSubject.next(2);
    behaviourSubject.next(3);
    behaviourSubject.next(4);

    setTimeout(() => {
      obs$.subscribe((val) => {
        console.log("Behaviour SUBJECT => Late: ", val);
      })      
    }, 500);
  }

}

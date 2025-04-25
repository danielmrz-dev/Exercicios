import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  standalone: true,
  imports: [],
  templateUrl: './replay-subject.component.html',
  styleUrl: './replay-subject.component.scss'
})
export class ReplaySubjectComponent {

    ngOnInit(): void {
      const replaySubject = new ReplaySubject<number>();
      const obs$ = replaySubject.asObservable();
  
      obs$.subscribe((val) => {
        console.log("Replay Subject => Early: ", val);
      })
  
      replaySubject.next(2);
      replaySubject.next(3);
      replaySubject.next(4);
      replaySubject.complete();
  
      setTimeout(() => {
        obs$.subscribe((val) => {
          console.log("Replay Subject => Late: ", val);
        })
      }, 500);
  
    }
}

import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {

  ngOnInit(): void {
    
    const subject = new Subject()
    const subject$ = subject.asObservable();
    subject$.subscribe((val) => console.log(val));
    subject.next(5);
    subject.next(3);
    subject.next(7);
    subject.complete();

    
  }
}

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-ex-7',
  imports: [],
  templateUrl: './ex-7.component.html',
  styleUrl: './ex-7.component.scss'
})
export class Ex7Component implements OnInit {
  
  subject$ = new Subject<number>();

  ngOnInit(): void {
    this.subject$.subscribe((value) => {
      console.log(value);
    })

    this.subject$.next(2);

    setTimeout(() => {
      this.subject$.next(3);
    }, 2000);
    
  }

}

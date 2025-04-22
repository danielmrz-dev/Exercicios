import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, timer } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.scss'
})
export class ObservablesComponent implements OnInit {

  ngOnInit(): void {
      // const interval$ = interval(1000);
      // interval$.subscribe((value) => console.log("Valores da Stream 1: ", value))
      // interval$.subscribe((value) => console.log("Valores da Stream 2: ", value))

      // const timer$ = timer(3000, 1000);
      // timer$.subscribe(value => console.log("Stream com timer: ", value));

      // fromEvent(document, "click").subscribe(
      //   value => console.log("Stream causada por evento: ", value),
      //   err => console.log(err),
      //   () => console.log("Completo.")
      // )
  }
}

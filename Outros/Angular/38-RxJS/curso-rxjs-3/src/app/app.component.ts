import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { Ex1Component } from "./components/ex-1/ex-1.component";
import { Ex2Component } from "./components/ex-2/ex-2.component";
import { Ex3Component } from "./components/ex-3/ex-3.component";
import { Ex4Component } from "./components/ex-4/ex-4.component";
import { Ex5Component } from "./components/ex-5/ex-5.component";
import { Ex6Component } from "./components/ex-6/ex-6.component";

@Component({
  selector: 'app-root',
  imports: [
    Ex6Component
],
  templateUrl: './app.component.html',
})
export class AppComponent {

  dataFrom: number = 0;
  dataOf: number = 0;

  // constructor() {
  //   const numbersFrom$ = from([1, 2, 3, 4, 5]);
  //   const numbersOf$ = of([1, 2, 3, 4, 5]);

  //   numbersFrom$.subscribe((numbers) => {
  //     console.log('Dados emitidos pelo from() => ', numbers);
  //     this.dataFrom = numbers;
  //   })

  //   numbersOf$.subscribe((numbers) => {
  //     console.log('Dados emitidos pelo from() => ', numbers);
  //     this.dataOf = numbers[1];
  //   })
  // }
}

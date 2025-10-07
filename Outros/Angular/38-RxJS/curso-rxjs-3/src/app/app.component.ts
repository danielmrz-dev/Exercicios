import { Component } from '@angular/core';
import { Ex8Component } from "./components/ex-8/ex-8.component";

@Component({
  selector: 'app-root',
  imports: [Ex8Component],
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

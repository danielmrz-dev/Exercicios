import { Component } from '@angular/core';
import { delay, from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-ex-8',
  imports: [],
  templateUrl: './ex-8.component.html',
  styleUrl: './ex-8.component.scss'
})
export class Ex8Component {

  constructor() {
    const example = (operator: any) => () => {
      from([0,1,2,3,4]).pipe(
        operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          (value) => console.log(value),
          () => {},
          () => console.log(`${operator.name} completed.`)
        )
    }

    example(mergeMap)();
  }

}

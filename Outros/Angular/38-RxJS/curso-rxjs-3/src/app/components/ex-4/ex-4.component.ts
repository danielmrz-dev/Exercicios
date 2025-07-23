import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-ex-4',
  imports: [],
  templateUrl: './ex-4.component.html',
  styleUrl: './ex-4.component.scss'
})
export class Ex4Component {

  constructor() {
    const users = [
      { id: 1, name: 'Alice', age: 28 },
      { id: 2, name: 'Bob', age: 34 },
      { id: 3, name: 'Carol', age: 22 },
    ];

    const users$ = of(users);

    users$.pipe(
      map((users) => {
        return users.map((user) => user.name);
      })
    ).subscribe(console.log)
    
    users$.pipe(
      filter((users) => {
        return users !== null
      })
    ).subscribe(console.log)

    const users2 = [
      { id: 1, name: 'Alice', age: 28 },
      { id: 2, name: 'Bob', age: 34 },
      { id: 3, name: 'Carol', age: 22 },
    ];
    
    from(users2).pipe(
      filter(user => user.age > 25)
    ).subscribe(console.log);
  }
}

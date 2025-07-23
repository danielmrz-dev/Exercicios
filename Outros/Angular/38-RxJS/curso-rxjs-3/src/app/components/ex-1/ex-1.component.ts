import { Component } from '@angular/core';
import { firstValueFrom, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-ex-1',
  imports: [],
  templateUrl: './ex-1.component.html',
})
export class Ex1Component {
  
  constructor() {
    const users = [
      { id: 1, name: 'Alice', age: 28 },
      { id: 2, name: 'Bob', age: 34 },
      { id: 3, name: 'Carol', age: 22 },
    ];

    const users$ = of(users);
    const bodyClick$ = fromEvent(document, 'click');
    const promiseMessage = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Resolvido!')
      }, 1000);
    })
    const message = from(promiseMessage);
    
    users$.subscribe((users) => {
      console.log(users);      
    })
    
    message.subscribe((message) => {
      console.log(message);      
    })

    bodyClick$.subscribe((event) => {
      console.log('Clicou', event);
    })

  }

  
}

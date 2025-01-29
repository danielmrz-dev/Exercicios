import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromisesService {

  private readonly http = inject(HttpClient);

  getUsers() {
    return firstValueFrom(this.http.get<any>('https://jsonplaceholder.typicode.com/users'));
  }
  getUsers2() {
    return firstValueFrom(this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
      map((usersListResponse) => {
        return usersListResponse[0]
      })
    ));
  }

  getTodos() {
    return firstValueFrom(this.http.get<any>('https://jsonplaceholder.typicode.com/todos'));
  }

  getUserTodos(id: number) {
    return firstValueFrom(this.http.get<any>(`https://jsonplaceholder.typicode.com/todsos?userId=${id}`));
  }

  promiseSimples() {
    return new Promise((resolve, reject) => {
      console.log('Pedido de pizza!');

      const pizzaPronta = (Math.random() * 10) > 5

      if (pizzaPronta) {
        resolve('Sua pizza chegou!')
      } else {
        reject('Sua pizza queimou!')
      }

    })
  }

  getPromiseInterval() {
    return firstValueFrom(
      new Observable((observer) => {
        const interval = setInterval(() => {
          console.log('Interval');
          observer.next('Valor Emitido!')
        }, 2000);

        return () => {
          clearInterval(interval)
          console.log('Finalizou!');          
        }
      })
    )
  }

}

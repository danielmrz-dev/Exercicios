import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from '../models/user.interface';
import { orders, users } from '../utils/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly api = "https://jsonplaceholder.typicode.com/users";
  private readonly http = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.api);
  }

  getUsuario(id: number): Observable<any> {
    return of(users[id]).pipe(delay(Math.random() * 20));
  }

  getOrders(userId: number): Observable<any> {
    const pedidos = orders.filter(order => order.userId === userId)
    return of(pedidos);
  }

}

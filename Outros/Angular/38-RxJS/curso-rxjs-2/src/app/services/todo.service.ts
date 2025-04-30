import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { ITodo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly api = "https://jsonplaceholder.typicode.com/todos";
  private readonly http = inject(HttpClient)

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.api);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly _http: HttpClient) { }

  getUsers(): Observable<{ name: string }[]> {
    return this._http.get<{ name: string }[]>("https://jsonplaceholder.typicode.com/users")
  }
}

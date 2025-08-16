import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly http = inject(HttpClient);
  private readonly basePath = 'https://jsonplaceholder.typicode.com';

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.basePath}/users`);
  }

  getUsersWithAjax(): Observable<AjaxResponse<IUser[]>> {
    return ajax<IUser[]>(`${this.basePath}/users`);
  }

  

}

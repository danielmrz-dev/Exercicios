import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserRequest } from '../interfaces/user-request.interface';
import { ICreateUserResponse } from '../interfaces/create-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  private readonly _http = inject(HttpClient)

  createUser(newUser: IUserRequest) {
    return this._http.post<ICreateUserResponse>('http://localhost:3000/create-user', newUser)
  }
}

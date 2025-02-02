import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IUserRequest } from '../interfaces/user-request.interface';
import { IUpdateUserResponse } from '../interfaces/update-user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  private readonly _http = inject(HttpClient)

  updateUser(userInfos: IUserRequest) {

    return this._http.put<IUpdateUserResponse>('http://localhost:3000/update-user', userInfos).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', updateUserResponse.token)
        return updateUserResponse;
      })
    )
  }
}

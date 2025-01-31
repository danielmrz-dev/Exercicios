import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  private readonly _http = inject(HttpClient)

  updateUser(userInfos: { name: string; email: string; username: string; password: string }) {

    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!)


    return this._http.put<{ message: string; token: string }>('http://localhost:3000/update-user', userInfos, { headers }).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', updateUserResponse.token)
        return updateUserResponse;
      })
    )
  }
}

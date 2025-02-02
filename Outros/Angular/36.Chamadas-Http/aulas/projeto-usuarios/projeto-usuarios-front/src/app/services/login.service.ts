import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ILoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _http = inject(HttpClient)

  login(username: string, password: string): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>('http://localhost:3000/login', 
    { username, password },
    { reportProgress: false, observe: 'body' }
    ).pipe(
      map((tokenResponse) => {
        localStorage.setItem('token', tokenResponse.token);
        return tokenResponse;
      })
    )
  }

}

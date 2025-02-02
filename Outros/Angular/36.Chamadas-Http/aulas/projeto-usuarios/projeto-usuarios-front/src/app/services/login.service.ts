import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ILoginResponse } from '../interfaces/login-response.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _http = inject(HttpClient)

  login(username: string, password: string): Observable<ILoginResponse> {

    const headers = new HttpHeaders().set('auth', 'n');

    return this._http.post<ILoginResponse>('http://localhost:3000/login', 
      { username, password },
      { reportProgress: false, observe: 'body', headers, context: new HttpContext().set(AUTH_TOKEN_ENABLED, false) }
      ).pipe(
        map((tokenResponse) => {
          localStorage.setItem('token', tokenResponse.token);
          return tokenResponse;
        })
      )
  }

}

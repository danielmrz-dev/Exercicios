import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { IRegisterRequest } from "../types/register-request.interface";
import { map, Observable } from "rxjs";
import { ICurrentUser } from "../types/current-user.interface";
import { IAuthResponse } from "../types/auth-response.intertace";
import { ILoginRequest } from "../types/login-request.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly http = inject(HttpClient);

    register(data: IRegisterRequest): Observable<ICurrentUser> {
        const url = 'https://api.realworld.show/api/users'
        return this.http.post<IAuthResponse>(url, data).pipe(
            map(response => response.user)
        );
    }

    login(data: ILoginRequest): Observable<ICurrentUser> {
        const url = 'https://api.realworld.show/api/users/login'
        return this.http.post<IAuthResponse>(url, data).pipe(
            map(response => response.user)
        );
    }

    getCurrentUser(): Observable<ICurrentUser> {
        const url = 'https://api.realworld.show/api/user'
        return this.http.get<IAuthResponse>(url).pipe(
            map(response => response.user)
        );
    }
}
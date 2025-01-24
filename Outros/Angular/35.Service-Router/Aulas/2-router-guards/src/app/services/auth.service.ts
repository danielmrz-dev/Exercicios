import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { jwtDecode } from "jwt-decode";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly _http = inject(HttpClient);

    login(username: string, password: string): Observable<{ token: string }> {
        return this._http.post<{ token: string }>('http://localhost:3000/login', {
            username: username,
            password: password
        }).pipe(
            map(response => {
                localStorage.setItem('access-token', response.token);
                return response
            })
        )
    }

    verifyToken(): Observable<{ valid: boolean, user: any }> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('access-token'))
        return this._http.get<{ valid: boolean, user: any }>('http://localhost:3000/verify-token', { headers })
    }

    getUserScopes(): string[] {
        const token = localStorage.getItem('access-token');

        if (!token) {
            return [];
        }

        const decoded: any = jwtDecode(token)

        return decoded.scopes;
    }

    getUserWalletStatus(): string {
        const token = localStorage.getItem('access-token');

        if (!token) {
            return '';
        }

        const decoded: any = jwtDecode(token)

        return decoded.walletStatus;
    }
}
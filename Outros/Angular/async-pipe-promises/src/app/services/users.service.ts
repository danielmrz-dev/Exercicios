import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    constructor(private readonly _http: HttpClient) {}
    getUser(): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            setTimeout(() => resolve({
                    id: 1,
                    name: 'Leanne Graham',
                    username: 'Bret',
                    email: 'Sincere@april.biz',
                })
            , 3000);
        });
    }

    getUserById(userId: number): Observable<IUser> {
        return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }
}

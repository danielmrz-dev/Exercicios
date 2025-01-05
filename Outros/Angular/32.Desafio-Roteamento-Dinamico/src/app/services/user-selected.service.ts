import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../interfaces/user/user.interface";

@Injectable({
    providedIn: 'root'
})
export class UsersSelectedService {

    constructor(private readonly _http: HttpClient) {}

    getUserSelected(userId: string): Observable<IUser> {
        return this._http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}
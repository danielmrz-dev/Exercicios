import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UsersList } from "../types/users-list.type";

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private readonly _http: HttpClient) {}

    getUsers(): Observable<UsersList> {
        return this._http.get<UsersList>('https://jsonplaceholder.typicode.com/users');
    }
}
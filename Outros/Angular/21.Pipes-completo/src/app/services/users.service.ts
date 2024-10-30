import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserResponse } from "../interfaces/user-response.interface";
import { UsersListResponse } from "../types/users-list-response.type";

@Injectable({
    providedIn: "root"
})
export class UsersService {

    constructor(private readonly _http: HttpClient ) {}

    getUserById(userId: number): Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`)
    }

    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>(`https://jsonplaceholder.typicode.com/users`);
    }

}
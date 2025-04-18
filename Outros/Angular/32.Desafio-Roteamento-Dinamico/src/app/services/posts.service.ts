import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class PostsService {

    constructor(private readonly _http: HttpClient) {}

    getUserPosts(userId: string): Observable<any> {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    }
}
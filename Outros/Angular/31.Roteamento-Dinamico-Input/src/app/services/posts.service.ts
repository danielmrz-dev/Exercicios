import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostsList } from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private readonly _http = inject(HttpClient)

    getUserPosts(userId: string): Observable<PostsList> {
        return this._http.get<PostsList>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    }
}
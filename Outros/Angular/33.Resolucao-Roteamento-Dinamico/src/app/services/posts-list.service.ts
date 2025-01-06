import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostsListResponse } from "../types/posts-list-response.type";
import { IPost } from "../interfaces/post.interface";

@Injectable({
    providedIn: 'root'
})
export class PostsListService {
    private readonly _http = inject(HttpClient);

    getUserPosts(userId: string): Observable<PostsListResponse> {
        return this._http.get<PostsListResponse>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    }

    getPost(postId: string): Observable<IPost> {
        return this._http.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
}
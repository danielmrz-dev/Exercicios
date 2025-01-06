import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommentsListResponse } from "../types/comments-list-response.type";

@Injectable({
    providedIn: 'root'
})
export class CommentsListService {

    private readonly _http = inject(HttpClient);

    getPostComments(postId: string): Observable<CommentsListResponse> {
        return this._http.get<CommentsListResponse>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    }


}
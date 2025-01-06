import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TodoListResponse } from "../types/todos-list-response.type";

@Injectable({
    providedIn: 'root'
})
export class TodosListService {
    private readonly _http = inject(HttpClient)

    getUserTodos(userId: string): Observable<TodoListResponse> {
        return this._http.get<TodoListResponse>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    }
}
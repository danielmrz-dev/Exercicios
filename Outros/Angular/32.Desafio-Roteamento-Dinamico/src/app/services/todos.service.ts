import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodosService {

    constructor(private readonly _http: HttpClient) {}

    getTodos(userId: string): Observable<any> {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    }
}
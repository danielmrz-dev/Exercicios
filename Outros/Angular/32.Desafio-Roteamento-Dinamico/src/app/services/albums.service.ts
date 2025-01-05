import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {

    constructor(private readonly _http: HttpClient) {}

    getUserAlbums(userId: string): Observable<any> {
        return this._http.get<any>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    }
}
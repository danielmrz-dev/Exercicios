import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ObservablesService {

    private readonly http = inject(HttpClient)

    teste() {
        return of('[1, 2]')
        // return new Observable((observer) => {
        //     observer.next('Observable')
        //     observer.next('Observable 2')
        // })
    }

    getUsers(): Observable<any> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
    }
}
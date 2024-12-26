import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ServiceService {
    getObj(): Observable<{ nome: string, idade: number }> {
        return of({
            nome: "Daniel",
            idade: 34
        })
    }
}
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUser(): Observable<any> {
        return of({
            nome: 'Daniel',
            idade: 34,
            ativo: true,
            endereco: {
                rua: 'tal',
                numero: 123
            },
            telefones: [
                { numero: 123456789, ddd: 14 },
                { numero: 987654321, ddd: 54 },
            ]
        })
    }
}
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  pessoas = [
    { nome: "Daniel", idade: 34 },
    { nome: "Ana", idade: 31 },
  ]

  getPessoas(): Observable<any> {
    return of(this.pessoas);
  }

}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  private readonly http = inject(HttpClient);

  private readonly apiProjetos = "https://danielmrz-portfolio-backend-production.up.railway.app/projetos"

  getProjetos(): Observable<any> {
    return this.http.get<any>(this.apiProjetos);
  }
}

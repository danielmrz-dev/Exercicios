import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private api = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) { }

  getDados(): Observable<any> {
    return this.http.get<any>(this.api)
  }
}

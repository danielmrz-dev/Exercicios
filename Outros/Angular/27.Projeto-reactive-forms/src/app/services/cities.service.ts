import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ICitiesResponse } from "../interfaces/cities-response/cities-response.interface";
import { CitiesList } from "../types/cities-list";

@Injectable({
    providedIn: 'root'
})
export class CitiesService {

    constructor(private readonly _httpCient: HttpClient) {}

    getCities(country: string, state: string): Observable<CitiesList> {
        return this._httpCient.post<ICitiesResponse>("https://countriesnow.space/api/v0.1/countries/state/cities",
            {
                country: country,
                state: state
            }
        ).pipe(
            map((citiesResponse) => {
                return citiesResponse.data
            })
        )
    }
}
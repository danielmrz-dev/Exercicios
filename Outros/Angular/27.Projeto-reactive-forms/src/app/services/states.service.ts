import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { StatesList } from "../types/states-list";
import { IStatesResponse } from "../interfaces/states-response/states-response-interface";
import { IState } from "../interfaces/states-response/state.interface";

@Injectable({
    providedIn: 'root'
})
export class StatesService {

    constructor(private readonly _httpClient: HttpClient) {}

    getStates(countryName: string): Observable<StatesList> {
        return this._httpClient.post<IStatesResponse>(
            "https://countriesnow.space/api/v0.1/countries/states",
            { country: countryName }
        ).pipe(
            map((stateResponse) => {
                return stateResponse.data.states
            })
        )
    }
}
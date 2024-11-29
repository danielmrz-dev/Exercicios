import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/users.interface';

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	constructor(private readonly _http: HttpClient) { }

	getUsers(): Observable<IUser[]> {
		return this._http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
	}
}

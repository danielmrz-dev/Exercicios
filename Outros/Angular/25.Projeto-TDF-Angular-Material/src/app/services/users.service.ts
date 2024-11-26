import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../types/users-list-response';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private readonly usersList: UsersListResponse = [
        {
            name: 'Ana Mariz',
            username: 'marizanamaria',
            email: 'marizanamaria@teste.com',
            password: 'senha1',
            birthDate: '25/03/1994',
            state: 22,
            musics: [
                { title: 'Black', band: 'Pearl Jam', genre: 8, isFavorite: true },
                { title: 'Dog days are over', band: 'Florence and the Machine', genre: 11, isFavorite: false },
                { title: 'Put your records on', band: 'Corine Bailey Rae', genre: 9, isFavorite: false },
            ],
        },
        {
            name: 'Daniel Moraes',
            username: 'thryk',
            email: 'dan@dan.com',
            password: 'senha2@!2',
            birthDate: '20/09/1990',
            state: 5,
            musics: [
                { title: 'Emptiness Machine', band: 'Linkin Park', genre: 8, isFavorite: false },
                { title: 'Heavy is the crown', band: 'Linkin Park', genre: 11, isFavorite: false },
                { title: 'Two faced', band: 'Linkin Park', genre: 9, isFavorite: true },
            ],
        },
        {
            name: 'Leo Chato',
            username: 'chatoleo',
            email: 'leochato@teste.com',
            password: 'senha3#@*BDB&&(@)',
            birthDate: '11/09/1989',
            state: 13,
            musics: [
                { title: 'Going under', band: 'Evanescence', genre: 8, isFavorite: false },
                { title: 'Everybodys fool', band: 'Evanescence', genre: 11, isFavorite: true },
                { title: 'Bring me to life', band: 'Evanescence', genre: 9, isFavorite: false },
            ],
        },
    ];

    getUsers(): Observable<UsersListResponse> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.usersList);
                observer.complete();
            }, 3000)
        })
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../types/users-list-response';

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    private readonly usersList: UsersListResponse = [
        {
            name: 'Usuário 1',
            username: 'usuario1',
            email: 'usuario1@teste.com',
            password: 'senha1',
            birthDate: '01/12/1990',
            state: 13,
            musics: [
                { title: 'Musica 1', band: 'Banda A', genre: 8, isFavorite: false },
                { title: 'Musica 2', band: 'Banda B', genre: 11, isFavorite: false },
                { title: 'Musica 3', band: 'Banda C', genre: 9, isFavorite: false },
            ],
        },
        {
            name: 'Usuário 2',
            username: 'usuario2',
            email: 'usuario2@teste.com',
            password: 'senha2',
            birthDate: '01/12/1990',
            state: 13,
            musics: [
                { title: 'Musica 1', band: 'Banda A', genre: 8, isFavorite: false },
                { title: 'Musica 2', band: 'Banda B', genre: 11, isFavorite: false },
                { title: 'Musica 3', band: 'Banda C', genre: 9, isFavorite: false },
            ],
        },
        {
            name: 'Usuário 3',
            username: 'usuario3',
            email: 'usuario3@teste.com',
            password: 'senha3',
            birthDate: '01/12/1990',
            state: 13,
            musics: [
                { title: 'Musica 1', band: 'Banda A', genre: 8, isFavorite: false },
                { title: 'Musica 2', band: 'Banda B', genre: 11, isFavorite: false },
                { title: 'Musica 3', band: 'Banda C', genre: 9, isFavorite: false },
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

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GenresService {
    private readonly genresList: any = [
        { id: 1, description: 'Rock' },
        { id: 2, description: 'Pop' },
        { id: 3, description: 'Hip Hop' },
        { id: 4, description: 'Jazz' },
        { id: 5, description: 'Classical' },
        { id: 6, description: 'Electronic' },
        { id: 7, description: 'Reggae' },
        { id: 8, description: 'Country' },
        { id: 9, description: 'Blues' },
        { id: 10, description: 'Funk' },
        { id: 11, description: 'Soul' },
        { id: 12, description: 'Metal' },
        { id: 13, description: 'Punk' },
        { id: 14, description: 'R&B' },
        { id: 15, description: 'Ska' },
        { id: 16, description: 'Gospel' },
        { id: 17, description: 'Latin' },
        { id: 18, description: 'K-Pop' },
        { id: 19, description: 'Indie' },
        { id: 20, description: 'Alternative' },
    ];

    getGenres(): Observable<any> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.genresList);
                observer.complete()
            }, 3000)
        })
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Photo } from '../photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private readonly http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>("http://localhost:3000/photos").pipe(delay(1000));
  }
}

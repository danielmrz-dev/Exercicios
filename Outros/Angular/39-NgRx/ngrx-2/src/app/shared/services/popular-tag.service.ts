import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TPopularTag } from '../types/popular-tag.type';
import { IPopularTagsResponse } from '../types/popular-tag-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PopularTagService {
  
  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.realworld.show/api'

  getPopularTags(): Observable<TPopularTag[]> {
    return this.http.get<IPopularTagsResponse>(`${this.baseUrl}/tags`).pipe(
      map((response) => {
        return response.tags;
      })
    )
  }

  
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from '../types/article.interface';
import { IArticleResponse } from '../types/article-response';
import { IArticleRequest } from '../types/article-request.interface';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.realworld.show/api'

  createArticle(articleRequest: IArticleRequest): Observable<IArticle> {
    return this.http.post<IArticleResponse>(`${this.baseUrl}/articles`, articleRequest).pipe(
      map((response) => response.article)
    )
  }

}

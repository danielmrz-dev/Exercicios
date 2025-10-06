import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from '../types/article.interface';
import { IArticleResponse } from '../types/article-response';
import { IArticleRequest } from '../types/article-request.interface';

@Injectable({
  providedIn: 'root'
})
export class EditArticleService {

  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.realworld.show/api'

  updateArticle(articleRequest: IArticleRequest, slug: string): Observable<IArticle> {
    return this.http.put<IArticleResponse>(`${this.baseUrl}/articles/${slug}`, articleRequest).pipe(
      map((response) => response.article)
    )
  }

}

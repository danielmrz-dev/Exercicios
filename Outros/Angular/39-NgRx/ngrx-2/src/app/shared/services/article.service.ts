import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IArticle } from '../types/article.interface';
import { ArticleResponse } from '../types/article-response';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.realworld.show/api'

  getArticle(slug: string): Observable<IArticle> {
    return this.http.get<ArticleResponse>(`${this.baseUrl}/articles/${slug}`).pipe(
      map((response) => response.article)
    )
  }

  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete(`${this.baseUrl}/articles/${slug}`);
  }
}

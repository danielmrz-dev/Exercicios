import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeedResponse } from '../types/feed-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  
  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.realworld.show/api'

  getFeed(url: string): Observable<IFeedResponse> {
    const fullUrl = this.baseUrl + url;
    return this.http.get<IFeedResponse>(fullUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, catchError, throwError, retry, finalize, Subject, BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private subject = new BehaviorSubject<IUser[]>([]);
  cursos$: Observable<IUser[]> = this.subject.asObservable();

  private readonly api = "https://jsonplaceholder.typicode.com/users";
  private readonly http = inject(HttpClient);

  obterUsuarios(): void {
    this.http.get<IUser[]>(this.api).subscribe((users) => {
      this.subject.next(users);
    })
  }
}

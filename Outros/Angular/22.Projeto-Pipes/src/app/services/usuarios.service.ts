import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IOperations } from '../interfaces/user.interface';
import { operations } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  getUsers(): Observable<IOperations[]> {
    return of(operations);
  }
}

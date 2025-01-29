import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, map, Observable, of, throwError } from "rxjs";

interface ITodoInfosResponse {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ObservablesService {

    private readonly http = inject(HttpClient)
    getUsers(): Observable<any> {
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
    }

    getTodoInfos(id: number): Observable<Partial<ITodoInfosResponse>> {
        return this.http.get<ITodoInfosResponse>(`https://jsonplaceholder.typicode.com/todos/${id}`).pipe(
            map((todoResponse) => {
                const newTodo = {
                    id: todoResponse.id,
                    title: todoResponse.title,
                }
                return newTodo;
            }),
            catchError((erro) => {
                return throwError(() => new Error('Deu ruim', erro))
            })
        );
    }

    obsInterval() {
        return new Observable((observer) => {
            console.log('Fora do intervalo => OBS Interval');
            const intervalo = setInterval(() => {
                observer.next('Valor emitido pelo observable');
                console.log('Intervalo sendo executado');
            }, 2000);

            return () => {
                console.log('Limpeza do observable e parando o intervalo.');
                observer.complete();
                clearInterval(intervalo);
            }
        })
    }

    obsOne() {
        return new Observable((observer) => {
            observer.next('OBS1 => 1')
            // setTimeout(() => {
            //     observer.next('OBS1 => 2')
            // }, 2000);
            // setTimeout(() => {
            //     observer.next('OBS1 => 3')
            // }, 3000);
            // return () => {
            //     console.log("Limpeza 1");                
            // }
        })
    }

    obsTwo() {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next('OBS2 => 1')
            }, 1000);
            
            setTimeout(() => {
                observer.next('OBS2 => 2')
            }, 2000);
            
            setTimeout(() => {
                observer.next('OBS2 => 3')
            }, 3000);

            return () => {
                console.log("Limpeza 2");                
            }
        })
    }
}
import { HttpContextToken, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true)
export function authInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {


    const APPLY_AUTH_TOKEN = request.context.get(AUTH_TOKEN_ENABLED)
    
    const TOKEN = APPLY_AUTH_TOKEN ? localStorage.getItem('token') : null;
    
    if (APPLY_AUTH_TOKEN && !TOKEN) {
        return throwError(() => new Error('Token não encontrado'));
    }
    
    let newRequest = TOKEN ? request.clone(
        { headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token')) }) : request;
    
    return next(newRequest);
}
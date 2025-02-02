import { HttpContextToken, HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true)
export function authInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {


    let newRequest = request;
    const APPLY_AUTH_TOKEN = request.context.get(AUTH_TOKEN_ENABLED)

    if (APPLY_AUTH_TOKEN) {
        newRequest = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        })        
    }


    return next(newRequest);
}
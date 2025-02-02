import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";

export function authInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {

    if (request.url.includes('login')) {
        return next(request);
    }

    const modifiedRequest = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
    })

    return next(modifiedRequest);
}
import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>, 
  next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const loadingService = inject(LoadingService)

  loadingService.showLoading();



  return next(req).pipe(
    finalize(() => {
      loadingService.hideLoading();
    })
  );
};

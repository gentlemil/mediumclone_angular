import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PersistanceService } from './persistance.service';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const persistanceService = inject(PersistanceService);

  let token = persistanceService.get('accessToken');
  token = String(token).slice(1, String(token).length - 1);

  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
};

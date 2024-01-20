import { HttpInterceptorFn } from '@angular/common/http';
export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  // req = req.clone({ setHeaders: { Authorization: 'Barear tokenblabla' } })
  return next(req);
};

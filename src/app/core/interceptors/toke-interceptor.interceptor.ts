import { HttpInterceptorFn } from '@angular/common/http';

export const tokeInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return next(req);
  }

  const reqWithHeader = req.clone({
    params: req.params.set('token', token),
  });

  return next(reqWithHeader)
};

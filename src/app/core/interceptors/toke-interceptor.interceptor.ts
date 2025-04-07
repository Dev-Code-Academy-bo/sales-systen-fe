import { HttpInterceptorFn } from '@angular/common/http';

export const tokeInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  // no funcionando error por revisar
  const token = localStorage.getItem('token');
  if (!token) {
    return next(req);
  }

  const reqWithHeader = req.clone({
    params: req.params.set('token', token),
  });

  return next(reqWithHeader)
};

import { CanActivateChildFn } from '@angular/router';

export const autentificationChildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};

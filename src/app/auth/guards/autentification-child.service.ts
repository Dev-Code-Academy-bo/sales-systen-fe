import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AutentificationChildService implements CanActivateChild{
  private _router: Router = inject(Router);
    private cookieService: CookieService = inject(CookieService);

  constructor() { }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // const token = localStorage.getItem('token');
    const token = this.cookieService.get('token');
    console.log('token', token);
    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

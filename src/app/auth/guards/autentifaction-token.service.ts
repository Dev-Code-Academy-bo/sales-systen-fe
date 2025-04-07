import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AutentifactionTokenService implements CanActivate  {
  private _router: Router = inject(Router);
    private cookieService: CookieService = inject(CookieService);

  constructor() { }

  canActivate(): boolean {
    // const token = localStorage.getItem('token');
    const token = this.cookieService.get('token');

    if (token) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}

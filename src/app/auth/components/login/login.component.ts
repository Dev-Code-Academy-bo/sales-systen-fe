import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthHttpClientService } from '../../../core/services/auth-http-client.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private _router: Router = inject(Router);
  private cookieService: CookieService = inject(CookieService);
  private _loginSevice: AuthHttpClientService = inject(AuthHttpClientService);

  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    })
  }

  signIn(): void {
    this._loginSevice.login(this.loginForm.value).subscribe((response) => {
      if (response) {
        this.cookieService.set('token', response);
        // localStorage.setItem('token', response);
        this._router.navigate(['/dashboard']);
      } else {
        alert('Error en el login');
      }
    });
  }
}

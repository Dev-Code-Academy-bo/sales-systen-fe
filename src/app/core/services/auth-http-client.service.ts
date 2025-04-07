import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginRequest } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpClientService {
  private _userHttpClient: HttpClient = inject(HttpClient);
  private _baseUrl: string = 'http://localhost:3000/api/login';

    constructor() { }

    public login(loginRequest: LoginRequest): Observable<string> {
      return this._userHttpClient.post<string>(`${this._baseUrl}`, loginRequest);
    }
}

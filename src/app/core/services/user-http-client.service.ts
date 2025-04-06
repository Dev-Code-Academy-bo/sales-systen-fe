import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserHttpClientService {
private _userHttpClient: HttpClient = inject(HttpClient);
private _baseUrl: string = 'http://localhost:3000/api/user';

  constructor() { }

  public getAllUsers(): Observable<UserInterface[]> {
    return this._userHttpClient.get<UserInterface[]>(`${this._baseUrl}`);
  }

  public setUser(data: any): Observable<UserInterface> {
    return this._userHttpClient.post<UserInterface>(`${this._baseUrl}`, data);
  }

}

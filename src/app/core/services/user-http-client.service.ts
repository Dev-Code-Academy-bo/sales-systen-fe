import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserHttpClientService {
private _userHttpClient: HttpClient = inject(HttpClient);
private cookieService: CookieService = inject(CookieService);
private _baseUrl: string = 'http://localhost:3000/api/user';

  constructor() { }

  public getAllUsers(): Observable<UserInterface[]> {
    return this._userHttpClient.get<UserInterface[]>(`${this._baseUrl}`, {params: this._getParams()});
  }

  public setUser(data: any): Observable<UserInterface> {
    return this._userHttpClient.post<UserInterface>(`${this._baseUrl}`, data, {params: this._getParams()});
  }

  public deleteUser(id: string): Observable<UserInterface> {
    return this._userHttpClient.delete<UserInterface>(`${this._baseUrl}/${id}`, {params: this._getParams()});
  }

  private _getParams(): HttpParams {
    // const token = localStorage.getItem('token');
    const token = this.cookieService.get('token')
      return new HttpParams().set('token', token!);
  }
}

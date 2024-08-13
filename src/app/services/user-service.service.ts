import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiBaseLink = 'https://reqres.in/api/users?page={page}';
  userDetailsBaseUrl = 'https://reqres.in/api/users/';

  constructor(private _httpClient: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this._httpClient.get(this.apiBaseLink);
  }
  getSpecificUser(id: number): Observable<any> {
    return this._httpClient.get(`https://reqres.in/api/users/${id}`);
  }
}

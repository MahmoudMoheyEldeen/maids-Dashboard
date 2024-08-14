import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  apiBaseLink = 'https://reqres.in/api/users?page={page}';
  userDetailsBaseUrl = 'https://reqres.in/api/users/';

  private cachedUsers$: Observable<any> | null = null;
  private cachedUserDetails: { [key: number]: Observable<any> } = {};

  constructor(private _httpClient: HttpClient) {}

  getAllUsers(): Observable<any> {
    if (!this.cachedUsers$) {
      this.cachedUsers$ = this._httpClient.get(this.apiBaseLink).pipe(
        shareReplay(1),

        tap(() => console.log('Fetched from API'))
      );
    } else {
      console.log('returned chached data');
    }
    return this.cachedUsers$;
  }

  getSpecificUser(id: number): Observable<any> {
    if (!this.cachedUserDetails[id]) {
      this.cachedUserDetails[id] = this._httpClient
        .get(`${this.userDetailsBaseUrl}${id}`)
        .pipe(
          shareReplay(1),
          tap(() => console.log(`Fetched user ${id} from API`))
        );
    } else {
      console.log(`Returning cached data for user ${id}`);
    }

    return this.cachedUserDetails[id];
  }
}

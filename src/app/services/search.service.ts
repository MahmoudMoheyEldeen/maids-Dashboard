import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new Subject<number>();

  setSearchId(searchId: number) {
    this.searchSubject.next(searchId);
  }

  getSearchId(): Observable<number> {
    return this.searchSubject.asObservable();
  }
}

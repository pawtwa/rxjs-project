import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$ = new BehaviorSubject(null);

  get user$() {
    return this._user$.asObservable();
  }

  constructor(
    private http: HttpClient
  ) { }

  login({ email, password }) {
    return this.http.post('/api/user/login', {
      email,
      password,
    }).pipe(
      tap(user => this._user$.next(user))
    );
  }

  logout() {
    this._user$.next(null);
  }

  getProfile() {
    return this.user$.pipe(
      switchMap(user => this.http.get('/api/user').pipe(catchError(err => null)))
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  login({email, password}) {
    return this.http.post('/api/user/login', {
      email,
      password,
    });
  }
}

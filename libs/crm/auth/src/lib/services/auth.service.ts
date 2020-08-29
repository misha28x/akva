import { Inject, Injectable } from '@angular/core';

import { API_URL } from '@akva/shared/config';

import { JwtService } from './jwt.service';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '@akva/shared/auth-models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient,
    private jwt: JwtService
  ) {}

  login(credentials: Credentials) {
    const url = `${this.apiUrl}/login`;
    return this.http.post(url, credentials);
  }

  logOut() {}

  private storeUser() {}
}

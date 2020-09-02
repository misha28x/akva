import { Inject, Injectable } from '@angular/core';

import { API_URL } from '@akva/shared/config';

import { JwtService } from './jwt.service';
import { HttpClient } from '@angular/common/http';

import { map, tap } from 'rxjs/operators';

import { AuthData, Credentials } from '@akva/shared/auth-models';
import { Response } from '@akva/shared/response';

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
    return this.http.post<Response<AuthData>>(url, credentials).pipe(
      tap((res) => this.storeUser(res.data)),
      map((res) => res.data.user)
    );
  }

  logOut() {}

  private storeUser(authData: AuthData) {
    this.jwt.saveToken(authData.token);
  }
}

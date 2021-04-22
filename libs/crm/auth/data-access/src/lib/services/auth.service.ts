import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { API_URL } from '@akva/crm/config';
import { Credentials, AuthResponse } from '@akva/crm/auth/util';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) {}

  login(credentials: Credentials) {
    const url = `${this.apiUrl}/login`;
    return this.http
      .post<AuthResponse>(url, { ...credentials })
      .pipe(map(({ data }) => data));
  }

  logout() {
    const url = `${this.apiUrl}/logout`;
    return this.http.get(url);
  }
}
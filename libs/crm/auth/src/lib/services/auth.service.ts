import { Inject, Injectable } from '@angular/core';

import { API_URL } from '@akva/shared/config';

import { JwtService } from './jwt.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient,
    private jwt: JwtService
  ) {}

  logOut() {}

  private storeUser() {}
}

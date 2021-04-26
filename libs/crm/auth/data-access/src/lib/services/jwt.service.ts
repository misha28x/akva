import { Injectable } from '@angular/core';

const TOKEN_KEY = 'akva__token';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  storeToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    const token = localStorage.getItem(TOKEN_KEY);

    if (!token) {
      throw new Error('Cannot find token in storage');
    }

    return token;
  }

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  }
}

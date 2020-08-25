import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private readonly JTW = 'JWT_TOKEN';

  constructor() {}

  saveToken(token: string) {
    if (!token) return;

    localStorage.setItem(this.JTW, token);
  }

  getCurrentUser() {
    const token = this.getToken();

    if (!token) {
      return undefined;
    }

    const encodedPayload = token.split('.')[1];
    const payload = window.atob(encodedPayload);
    return JSON.parse(payload);
  }

  getToken(): string {
    return localStorage.getItem(this.JTW);
  }

  clear() {
    localStorage.removeItem(this.JTW);
  }
}

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { API_URL } from '@akva/shared/config';

import { AuthService } from './auth.service';
import { JwtService } from './jwt.service';
import { Credentials } from '@akva/shared/auth-models';

describe('AuthService', () => {
  const apiUrl = 'api';
  let service: AuthService;
  let controller: HttpTestingController;
  let CREDENTIALS: Credentials;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_URL, useValue: apiUrl }, JwtService],
    });

    service = TestBed.inject(AuthService);
    controller = TestBed.inject(HttpTestingController);

    CREDENTIALS = { login: 'admin', password: 'pswd' };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call authorize with correct credentials', () => {
    service.login(CREDENTIALS).subscribe();

    controller.expectOne((request) => {
      const isValidUrl = request.url === 'api/login';
      const isValidMethod = request.method === 'POST';
      const correctCredentials =
        JSON.stringify(request.body) === JSON.stringify(CREDENTIALS);

      return isValidUrl && isValidMethod && correctCredentials;
    });

    controller.verify();
  });
});

import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { API_URL } from '@akva/crm/config';
import { AuthService } from './auth.service';
import { Credentials } from '@akva/crm/auth/util';

describe('AuthService', () => {
  let testApiUrl = 'api';
  let service: AuthService;
  let httpClient: HttpClient;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: API_URL, useValue: testApiUrl }],
    });

    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call api with correct credentials ', () => {
    const CREDENTIALS: Credentials = { login: 'admin', password: '123' };
    const EXPECTED_URL = `${testApiUrl}/login`;

    service.login(CREDENTIALS).subscribe();

    testingController.expectOne((request) => {
      const isValidUrl = request.url === EXPECTED_URL;
      const isValidMethod = request.method === 'POST';
      const isValidCredentials =
        JSON.stringify(request.body) === JSON.stringify(CREDENTIALS);

      return isValidUrl && isValidMethod && isValidCredentials;
    });

    testingController.verify();
  });
});

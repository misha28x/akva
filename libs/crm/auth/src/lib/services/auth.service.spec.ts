import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { API_PROVIDER } from '@akva/shared/config';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [API_PROVIDER],
    });

    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

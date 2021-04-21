import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jest-marbles';

import { Observable } from 'rxjs';

import { AuthEffects } from './auth.effects';
import { JwtService } from '../../services/jwt.service';
import { AuthService } from '../../services/auth.service';
import { login, loginFailure, loginSuccess } from '@akva/crm/auth/data-access';
import { Credentials, User } from '@akva/crm/auth/util';
import { tap } from 'rxjs/operators';

class UserData {}

describe('Auth Effects', () => {
  let effects: AuthEffects;
  let actions$: Observable<any>;
  let jwtService: JwtService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffects,
        provideMockActions(() => actions$),

        {
          provide: AuthService,
          useValue: { login: jest.fn(), logout: jest.fn() },
        },
        {
          provide: JwtService,
          useValue: { storeToken: jest.fn() },
        },
      ],
    });

    effects = TestBed.inject(AuthEffects);
    jwtService = TestBed.inject(JwtService);
    authService = TestBed.inject(AuthService);
  });

  describe('login$', () => {
    it('should return loginSuccess actions if login succeeds', () => {
      const credentials: Credentials = { login: 'test', password: '' };
      const user = { name: 'admin', permission: 'Admin' } as User;
      const action = login({ credentials });
      const completion = loginSuccess({ user });

      actions$ = hot('-a', { a: action });
      const response$ = cold('-a|', { a: { user } });
      const expected$ = cold('--b-', { b: completion });
      authService.login = jest.fn(() => response$);

      expect(effects.login$).toBeObservable(expected$);
    });

    it('should return loginFailure action if service throws error', () => {
      const credentials: Credentials = { login: 'admin', password: '' };
      const error = { errorMsg: 'Deliberate error message' };
      const action = login({ credentials });
      const completion = loginFailure({ error: error.errorMsg });

      actions$ = hot('-a---', { a: action });
      const response$ = cold('-#', {}, error);
      const expected$ = cold('--b', { b: completion });
      authService.login = jest.fn(() => response$);

      expect(effects.login$).toBeObservable(expected$);
    });
  });
});

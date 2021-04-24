import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { login, loginFailure, loginSuccess, logout } from './auth.actions';
import { AuthService } from '../../services/auth.service';
import { JwtService } from '../../services/jwt.service';

@Injectable()
export class AuthEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private jwtService: JwtService,
    private authService: AuthService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap(({ credentials }) =>
        this.authService.login(credentials).pipe(
          tap(({ token }) => this.jwtService.storeToken(token)),
          map(({ user }) => loginSuccess({ user })),
          catchError(({ errorMsg }) => {
            return of(loginFailure({ error: errorMsg }));
          })
        )
      )
    )
  );

  logoutRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => this.router.navigate(['/login']))
      ),
    {
      dispatch: false,
    }
  );

  loginSuccessRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );
}

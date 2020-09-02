import { Router } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { INITIAL_PATH } from '@akva/shared/config';
import { Credentials, UserPermission } from '@akva/shared/auth-models';

import { AuthApiActions, AuthActions, LoginPageActions } from '../actions';

import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginPageActions.login),
      map(({ type, ...credentials }) => credentials),
      switchMap((credentials: Credentials) =>
        this.authSv.login(credentials).pipe(
          map((user) => AuthApiActions.loginSuccess({ user })),
          catchError(({ error }: HttpErrorResponse) => {
            const { errorMsg } = error;
            return of(AuthApiActions.loginFailure({ error: errorMsg }));
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthApiActions.loginSuccess),
        map(({ user }) => user.permission),
        tap((permission) =>
          this.router.navigate([this.initialPath[permission]])
        )
      ),
    {
      dispatch: false,
    }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        map(() => this.authSv.logOut())
      ),
    { dispatch: false }
  );

  constructor(
    @Inject(INITIAL_PATH)
    private initialPath: { [role in UserPermission]: string },
    private authSv: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}
}

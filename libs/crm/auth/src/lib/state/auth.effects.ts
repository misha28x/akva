import { Inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { getUserRole, UserRole } from '@akva/shared/auth-models';
import { Router } from '@angular/router';

import { login, loginError, loginSuccess } from './auth.actions';
import { AuthService } from '../services/auth.service';
import { INITIAL_PATH } from '@akva/shared/config';

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap((credentials) =>
        this.authSv.login(credentials).pipe(
          map((authData) => loginSuccess(authData)),
          catchError(({ error }: HttpErrorResponse) => {
            const { errorMsg } = error;
            return of(loginError({ error: errorMsg }));
          })
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        map(({ permission }) => getUserRole(permission)),
        tap((role) => this.router.navigate([this.initialPath[role]]))
      ),
    {
      dispatch: false,
    }
  );

  constructor(
    @Inject(INITIAL_PATH) private initialPath: { [role in UserRole]: string },
    private actions$: Actions,
    private authSv: AuthService,
    private router: Router
  ) {}

  private navigateToIni(role: UserRole) {}
}

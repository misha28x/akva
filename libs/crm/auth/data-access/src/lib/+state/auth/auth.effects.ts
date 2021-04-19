import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthFeature from './auth.reducer';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  login$ = this.actions$.pipe(
    ofType(AuthActions.login),
    fetch({
      run(a) {
        return null;
      },
      onError(a) {
        return null;
      },
    })
  );
}

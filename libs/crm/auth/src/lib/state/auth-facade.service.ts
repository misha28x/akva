import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Credentials } from '@akva/shared/auth-models';

import { getError, getLoading } from './auth.selectors';
import { login } from './auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthFacadeService {
  error$ = this.store.pipe(select(getError));
  loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store) {}

  login(credentials: Credentials) {
    this.store.dispatch(login(credentials));
  }

  logOut() {}
}

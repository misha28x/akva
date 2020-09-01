import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { login } from '../state/auth.actions';
import { getError, getLoading } from '../state/auth.selectors';

import { Credentials } from '@akva/shared/auth-models';

@Component({
  selector: 'akva-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error$ = this.store.pipe(select(getError));
  loading$ = this.store.pipe(select(getLoading));

  constructor(private store: Store) {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(login(credentials));
  }
}

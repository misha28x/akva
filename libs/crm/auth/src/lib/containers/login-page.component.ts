import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LoginPageActions } from '../state/actions';
import * as fromAuth from '../state/reducers';

import { Credentials } from '@akva/shared/auth-models';

@Component({
  selector: 'akva-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error$ = this.store.pipe(select(fromAuth.selectLoginPageError));
  loading$ = this.store.pipe(select(fromAuth.selectLoginPagePending));

  constructor(private store: Store<fromAuth.State>) {}

  onSubmit(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login(credentials));
  }
}

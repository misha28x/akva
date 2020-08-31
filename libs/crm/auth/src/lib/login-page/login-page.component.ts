import { Component } from '@angular/core';

import { Credentials } from '@akva/shared/auth-models';
import { AuthFacadeService } from '../state/auth-facade.service';

@Component({
  selector: 'akva-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  error$ = this.auth.error$;
  loading$ = this.auth.loading$;

  constructor(private auth: AuthFacadeService) {}

  onSubmit(credentials: Credentials) {
    this.auth.login(credentials);
  }
}

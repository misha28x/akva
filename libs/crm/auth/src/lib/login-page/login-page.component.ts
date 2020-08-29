import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Credentials } from '@akva/shared/auth-models';

@Component({
  selector: 'akva-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  get loading() {
    return this.status === 'loading';
  }

  private status: 'idle' | 'loading' | 'submitted' | 'error' = 'idle';

  constructor(private auth: AuthService) {}

  onSubmit(credentials: Credentials) {
    this.status = 'loading';
    this.authorize(credentials).subscribe(() => (this.status = 'idle'));
  }

  private authorize(credentials: Credentials) {
    return this.auth.login(credentials);
  }
}

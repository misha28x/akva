import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'akva-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm: FormGroup = this.createLoginForm();

  get loading() {
    return this.status === 'loading';
  }

  get authFailed() {
    return this.status === 'error';
  }

  private status: 'idle' | 'loading' | 'submitted' | 'error' = 'idle';

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.authorize(this.getCredentials());
  }

  authorize({ login, password }) {
    this.status = 'loading';
  }

  private getCredentials() {
    return this.loginForm.value;
  }

  private createLoginForm() {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}

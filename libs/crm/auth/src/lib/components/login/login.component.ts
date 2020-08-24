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

  private status: 'idle' | 'loading' | 'submitted' | 'error' = 'idle';

  get loading() {
    return this.status === 'loading';
  }

  get authFailed() {
    return this.status === 'error';
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const formValue = this.loginForm.value;
    this.authorize(formValue);
  }

  authorize({ login, password }) {
    this.status = 'error';
  }

  private createLoginForm() {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}

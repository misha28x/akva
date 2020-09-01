import {
  ChangeDetectionStrategy,
  EventEmitter,
  Component,
  Output,
  Input,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Credentials } from '@akva/shared/auth-models';

@Component({
  selector: 'akva-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  @Input() error: string;
  @Input() loading: boolean;

  @Output() submitted = new EventEmitter<Credentials>();

  loginForm: FormGroup = this.createLoginForm();

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.submitted.emit(this.getCredentials());
  }

  private getCredentials(): Credentials {
    return this.loginForm.value as Credentials;
  }

  private createLoginForm() {
    return this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}

import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of, asyncScheduler } from 'rxjs';

import { API_PROVIDER } from '@akva/shared/config';

import { LoginPageComponent } from './login-page.component';
import { LoginFormComponent } from '../components/login-form.component';
import { AuthFacadeService } from '@akva/crm/auth';

import { Credentials } from '@akva/shared/auth-models';

const authFacadeFactory = (): Partial<AuthFacadeService> => ({
  login: jest.fn(),
  loading$: of(false, asyncScheduler),
  error$: of('', asyncScheduler),
});

describe('LoginPageComponent', () => {
  let credentials: Credentials;
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent, LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        API_PROVIDER,
        { provide: AuthFacadeService, useValue: authFacadeFactory() },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    credentials = { password: 'admin', username: 'admin' };
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AuthFacadeService);
  });

  afterEach(() => {
    service.login.mockRestore();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should authorize when credentials is submitted', fakeAsync(() => {
    const form = fixture.debugElement.query(By.css('akva-login-form'))
      .componentInstance as LoginFormComponent;

    form.submitted.emit(credentials);
    tick();

    expect(service.login).toBeCalledWith(credentials);
  }));
});

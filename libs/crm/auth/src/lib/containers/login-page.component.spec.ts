import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MockStore, provideMockStore } from '@ngrx/store/testing';

import * as fromAuth from '../state/reducers';
import { LoginPageActions } from '../state/actions';

import { LoginPageComponent } from './login-page.component';
import { Credentials } from '@akva/shared/auth-models';

describe('LoginPageComponent', () => {
  let fixture: ComponentFixture<LoginPageComponent>;
  let component: LoginPageComponent;
  let store: MockStore;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        provideMockStore({
          selectors: [
            {
              selector: fromAuth.selectLoginPagePending,
              value: false,
            },
          ],
        }),
      ],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    spyOn(store, 'dispatch');
  });

  it('should compile', () => {
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('should dispatch login action on submit', () => {
    const credentials: Credentials = { password: 'admin', login: 'admin' };
    const action = LoginPageActions.login(credentials);

    component.onSubmit(credentials);

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});

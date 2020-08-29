import { createAction, props } from '@ngrx/store';
import { Credentials, AuthData } from '@akva/shared/auth-models';

const login = createAction('[AUTH] Login', props<Credentials>());

const loginSuccess = createAction(
  '[Auth Api] Login Success',
  props<AuthData>()
);

const loginError = createAction(
  '[Auth Api] Login Error',
  props<{ error: string }>()
);

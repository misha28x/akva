import { createAction, props } from '@ngrx/store';
import { AuthData } from '@akva/shared/auth-models';

export const loginSuccess = createAction(
  '[Auth Api] Login Success',
  props<AuthData>()
);

export const loginError = createAction(
  '[Auth Api] Login Error',
  props<{ error: string }>()
);

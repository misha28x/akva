import { createAction, props } from '@ngrx/store';
import { User } from '@akva/shared/auth-models';

export const loginSuccess = createAction(
  '[Auth Api] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Api] Login Error',
  props<{ error: string }>()
);

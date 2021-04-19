import { createAction, props } from '@ngrx/store';

import { Credentials, User } from '../../models/auth.model';

export const login = createAction(
  '[Login Page] Login',
  props<{ credentials: Credentials }>()
);

export const loginSuccess = createAction(
  '[Auth Api] Login Success',
  props<{ user: User }>()
);
export const loginFailure = createAction(
  '[Auth Api] Login Failure',
  props<{ error: any }>()
);

export const logout = createAction('[Auth] Logout');

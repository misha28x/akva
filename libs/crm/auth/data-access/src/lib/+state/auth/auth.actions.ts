import { createAction, props } from '@ngrx/store';

import { Credentials, User } from '@akva/crm/auth/util';

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
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

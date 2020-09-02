import { User } from '@akva/shared/auth-models';
import { createReducer, on } from '@ngrx/store';

import { AuthActions, AuthApiActions } from '../actions';

export const statusFeatureKey = 'status';

export interface State {
  user: User | null;
}

export const initialState = {
  user: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.logout, () => ({ user: null })),
  on(AuthApiActions.loginSuccess, (state, { user }) => ({ ...state, user }))
);

export const getUser = (state: State) => state.user;
export const getUserPermission = (state: State) => state.user.permission;

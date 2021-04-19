import { createReducer, on, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { User } from '../../models/auth.model';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  user?: User | null;
  error?: string | null; // last known error (if any)
  pending?: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  pending: false,
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.login, (state) => ({ ...state, pending: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    pending: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}

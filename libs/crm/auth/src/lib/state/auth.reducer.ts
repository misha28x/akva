import { createReducer, on } from '@ngrx/store';
import { UserRole } from '@akva/shared/auth-models';

import { login, loginError, loginSuccess } from './auth.actions';

export const AUTH_FEATURE_KEY = 'AUTH_STORE';

export interface AuthState {
  username?: string;
  token?: string;
  error?: string;
  loading: boolean;
  permission?: number;
}

export const initialState: AuthState = {
  loading: false,
};

export const authReducer = createReducer<AuthState>(
  initialState,
  on(login, (state) => ({ ...state, loading: true, error: null })),
  on(loginError, (state, { error }) => ({ ...state, error, loading: false })),
  on(loginSuccess, (state, { type, ...authData }) => ({
    ...state,
    ...authData,
    loading: false,
  }))
);

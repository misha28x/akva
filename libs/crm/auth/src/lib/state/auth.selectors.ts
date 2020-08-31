import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.reducer';
import { getUserRole } from '@akva/shared/auth-models';

const getAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

export const getError = createSelector(getAuthState, (state) => state.error);

export const getUser = createSelector(
  getAuthState,
  ({ error, loading, ...user }) => user
);

export const getLoading = createSelector(
  getAuthState,
  (state) => state.loading
);

export const getRole = createSelector(getAuthState, ({ permission }) =>
  getUserRole(permission)
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, State, AuthPartialState } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);

export const getIsPending = createSelector(
  getAuthState,
  (state: State) => state.pending
);

export const getUser = createSelector(
  getAuthState,
  (state: State) => state.user
);

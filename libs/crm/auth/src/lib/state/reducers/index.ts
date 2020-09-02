import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromLoginPage from './login-page.reducer';
import * as fromAuth from './auth.reducer';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  [fromAuth.statusFeatureKey]: fromAuth.State;
  [fromLoginPage.loginPageFeatureKey]: fromLoginPage.State;
}

export interface State {
  [AUTH_FEATURE_KEY]: AuthState;
}

export function reducers(state: AuthState | null, action: Action) {
  return combineReducers({
    [fromAuth.statusFeatureKey]: fromAuth.reducer,
    [fromLoginPage.loginPageFeatureKey]: fromLoginPage.reducer,
  })(state, action);
}

export const selectAuthState = createFeatureSelector<State, AuthState>(
  AUTH_FEATURE_KEY
);

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state) => state.status
);

export const selectUser = createSelector(
  selectAuthStatusState,
  fromAuth.getUser
);

export const selectLoggedIn = createSelector(selectUser, (user) => !!user);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state) => state.loginPage
);

export const selectLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const selectLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);

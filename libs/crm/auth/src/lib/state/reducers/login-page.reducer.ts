import { AuthApiActions, LoginPageActions } from '../actions';
import { createReducer, on } from '@ngrx/store';

export const loginPageFeatureKey = 'loginPage';

export interface State {
  pending: boolean;
  error: string | null;
}

const initialState: State = {
  pending: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(LoginPageActions.login, (state) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(AuthApiActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    pending: false,
  })),
  on(AuthApiActions.loginSuccess, (state) => ({
    ...state,
    pending: false,
    error: null,
  }))
);

export const getPending = (state: State) => state.pending;
export const getError = (state: State) => state.error;

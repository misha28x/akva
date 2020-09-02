import { createAction, props } from '@ngrx/store';

export const logout = createAction('[Auth] Logout');
export const logoutConfirmation = createAction('[Auth] Logout Confirmation');
export const logoutDismiss = createAction('[Auth] Logout Dismiss');

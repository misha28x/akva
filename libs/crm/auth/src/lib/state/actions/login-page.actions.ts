import { createAction, props } from '@ngrx/store';
import { Credentials } from '@akva/shared/auth-models';

export const login = createAction('[AUTH] Login', props<Credentials>());

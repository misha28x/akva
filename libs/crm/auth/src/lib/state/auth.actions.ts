import { createAction, props } from '@ngrx/store';
import { Credentials, AuthData } from '@akva/shared/auth-models';

export  const login = createAction('[AUTH] Login', props<Credentials>());


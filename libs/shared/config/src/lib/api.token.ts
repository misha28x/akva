import { InjectionToken } from '@angular/core';
import { environment } from '@akva/shared/environments';

export const API_URL = new InjectionToken('Api url');

export const API_PROVIDER = {
  provide: API_URL,
  useValue: environment.api,
};

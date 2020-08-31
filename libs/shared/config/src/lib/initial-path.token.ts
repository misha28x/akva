import { InjectionToken } from '@angular/core';
import { UserRole } from '@akva/shared/auth-models';

const pathByRole: { [id in UserRole]: string } = {
  Admin: '/admin/tasks-planning',
  Metrology: '/metrology/',
  Operator: '/operator',
  Unauthorized: '/login',
};
export const INITIAL_PATH = new InjectionToken('Initial path by role');

export const INITIAL_PATH_PROVIDER = {
  provide: INITIAL_PATH,
  useValue: pathByRole,
};

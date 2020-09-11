import { InjectionToken } from '@angular/core';
import { UserPermission } from '@akva/shared/auth-models';

const pathByPermission: { [id in UserPermission]: string } = {
  [UserPermission.Admin]: '/admin/tasks-planning',
  [UserPermission.Metrology]: '/metrology/',
  [UserPermission.Operator]: '/operator',
  [UserPermission.Unauthorized]: '/login',
};
export const INITIAL_PATH = new InjectionToken('Initial path by role');

export const INITIAL_PATH_PROVIDER = {
  provide: INITIAL_PATH,
  useValue: pathByPermission,
};

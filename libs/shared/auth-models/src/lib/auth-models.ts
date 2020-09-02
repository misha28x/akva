export interface AuthData {
  user: User;
  token: string;
}

export interface User {
  name: string;
  userId?: string;
  district?: string;
  createFor?: string;
  permission: UserPermission;
  serviceProvider?: number;
  serviceType?: ServiceTypes;
}

export interface Credentials {
  login: string;
  password: string;
}

export const enum UserPermission {
  Admin = 1,
  Operator = 2,
  Metrology = 3,
  Unauthorized = 4,
}

export enum ServiceTypes {
  Cold = 1,
  Hot = 2,
  Both = 3,
}

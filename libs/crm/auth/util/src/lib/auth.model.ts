export interface User {
  name: string;
  userId?: string;
  district?: string;
  createFor?: string;
  serviceProvider?: number;
  permission: UserPermission;
  serviceType?: ServiceType[];
}

export interface Credentials {
  login: string;
  password: string;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface AuthResponse {
  error?: string | null;
  data: AuthData;
}

export const userPermissions = [
  'Admin',
  'Operator',
  'Metrology',
  'Unauthorized',
] as const;
export const serviceTypes = ['Cold', 'Hot'] as const;

export type UserPermission = typeof userPermissions[number];
export type ServiceType = typeof serviceTypes[number];

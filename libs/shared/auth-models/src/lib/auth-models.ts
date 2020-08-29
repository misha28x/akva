export interface AuthData {
  id: string;
  name: string;
  token: string;
  role: number;
  refreshToken: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export type UserRole = 'Admin' | 'Operator' | 'Metrology' | 'Unauthorized';

export const getUserRole = (permission: number): UserRole => {
  switch (permission) {
    case 1:
      return 'Admin';
    case 2:
      return 'Operator';
    case 3:
      return 'Metrology';
    default:
      return 'Unauthorized';
  }
};

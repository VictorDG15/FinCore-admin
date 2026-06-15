import { UserRole } from './enums';

export interface LoginCredentials {
  email: string;
  password: string;
  remember: boolean;
}

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  office: string;
  avatarUrl?: string;
}

export interface AuthSession {
  token: string;
  user: AuthUser;
  expiresAt: string;
}

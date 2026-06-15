import { UserRole, UserStatus } from './enums';

export interface InternalUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  department: string;
  lastAccess: string;
}

export type InternalUserPayload = Omit<InternalUser, 'id' | 'lastAccess'>;

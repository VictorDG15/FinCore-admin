import { CustomerStatus } from './enums';

export interface Customer {
  id: string;
  documentNumber: string;
  fullName: string;
  email: string;
  phone: string;
  segment: 'Premium' | 'Business' | 'Retail' | 'Corporate';
  status: CustomerStatus;
  riskScore: number;
  monthlyIncome: number;
  createdAt: string;
  city: string;
}

export type CustomerPayload = Omit<Customer, 'id' | 'createdAt' | 'riskScore'> & Partial<Pick<Customer, 'riskScore'>>;

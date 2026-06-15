import { CurrencyCode, TransactionStatus, TransactionType } from './enums';

export interface Transaction {
  id: string;
  operationCode: string;
  accountNumber: string;
  customerName: string;
  type: TransactionType;
  status: TransactionStatus;
  currency: CurrencyCode;
  amount: number;
  fee: number;
  channel: 'Mobile' | 'Web' | 'Branch' | 'ATM';
  createdAt: string;
  description: string;
}

export interface TransactionFilters {
  fromDate?: Date | null;
  toDate?: Date | null;
  status?: TransactionStatus | null;
  type?: TransactionType | null;
  minAmount?: number | null;
  maxAmount?: number | null;
}

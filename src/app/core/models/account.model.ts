import { AccountStatus, AccountType, CurrencyCode } from './enums';

export interface Account {
  id: string;
  accountNumber: string;
  customerId: string;
  customerName: string;
  type: AccountType;
  currency: CurrencyCode;
  balance: number;
  availableBalance: number;
  status: AccountStatus;
  openedAt: string;
  branch: string;
}

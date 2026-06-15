export enum CustomerStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Pending = 'PENDING'
}

export enum AccountStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Pending = 'PENDING'
}

export enum AccountType {
  Savings = 'SAVINGS',
  Checking = 'CHECKING',
  Credit = 'CREDIT',
  Investment = 'INVESTMENT'
}

export enum CurrencyCode {
  PEN = 'PEN',
  USD = 'USD',
  EUR = 'EUR'
}

export enum TransactionType {
  Deposit = 'DEPOSIT',
  Withdrawal = 'WITHDRAWAL',
  Transfer = 'TRANSFER',
  Payment = 'PAYMENT'
}

export enum TransactionStatus {
  Completed = 'COMPLETED',
  Pending = 'PENDING',
  Failed = 'FAILED',
  Reversed = 'REVERSED'
}

export enum RequestStatus {
  Pending = 'PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export enum RequestType {
  CreditEvaluation = 'CREDIT_EVALUATION',
  LimitIncrease = 'LIMIT_INCREASE',
  AccountOpening = 'ACCOUNT_OPENING',
  ComplianceReview = 'COMPLIANCE_REVIEW'
}

export enum UserRole {
  Admin = 'ADMIN',
  Analyst = 'ANALYST',
  Manager = 'MANAGER'
}

export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
  Locked = 'LOCKED'
}

export enum KpiTrend {
  Up = 'UP',
  Down = 'DOWN',
  Neutral = 'NEUTRAL'
}

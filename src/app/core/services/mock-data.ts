import { Account } from '../models/account.model';
import { Customer } from '../models/customer.model';
import { AccountStatus, AccountType, CurrencyCode, CustomerStatus, KpiTrend, RequestStatus, RequestType, TransactionStatus, TransactionType, UserRole, UserStatus } from '../models/enums';
import { KpiCard, ReportRow } from '../models/kpi.model';
import { InternalRequest } from '../models/request.model';
import { Transaction } from '../models/transaction.model';
import { InternalUser } from '../models/user.model';

export const CUSTOMERS_MOCK: Customer[] = [
  { id: 'CUS-1001', documentNumber: '72844121', fullName: 'Andrea Salazar', email: 'andrea.salazar@acme.pe', phone: '+51 989 210 340', segment: 'Premium', status: CustomerStatus.Active, riskScore: 18, monthlyIncome: 14500, createdAt: '2026-05-02T10:20:00', city: 'Lima' },
  { id: 'CUS-1002', documentNumber: '10451233420', fullName: 'Inversiones Qori SAC', email: 'tesoreria@qori.pe', phone: '+51 941 100 884', segment: 'Corporate', status: CustomerStatus.Active, riskScore: 34, monthlyIncome: 132000, createdAt: '2026-04-19T09:15:00', city: 'Arequipa' },
  { id: 'CUS-1003', documentNumber: '70561288', fullName: 'Carlos Benites', email: 'carlos.benites@mail.com', phone: '+51 936 870 212', segment: 'Retail', status: CustomerStatus.Pending, riskScore: 52, monthlyIncome: 4300, createdAt: '2026-06-01T16:45:00', city: 'Trujillo' },
  { id: 'CUS-1004', documentNumber: '20603100518', fullName: 'Blue Andes Logistics', email: 'finance@blueandes.pe', phone: '+51 955 222 415', segment: 'Business', status: CustomerStatus.Active, riskScore: 26, monthlyIncome: 76000, createdAt: '2026-03-26T08:05:00', city: 'Lima' },
  { id: 'CUS-1005', documentNumber: '70123348', fullName: 'Lucía Mendoza', email: 'lucia.mendoza@mail.com', phone: '+51 912 310 555', segment: 'Premium', status: CustomerStatus.Inactive, riskScore: 44, monthlyIncome: 11200, createdAt: '2026-01-14T14:32:00', city: 'Cusco' },
  { id: 'CUS-1006', documentNumber: '20499200144', fullName: 'Nova Retail Group', email: 'payments@novaretail.pe', phone: '+51 980 555 227', segment: 'Corporate', status: CustomerStatus.Active, riskScore: 21, monthlyIncome: 185000, createdAt: '2026-05-21T11:10:00', city: 'Lima' },
  { id: 'CUS-1007', documentNumber: '76833420', fullName: 'Raúl Herrera', email: 'raul.herrera@mail.com', phone: '+51 900 425 100', segment: 'Retail', status: CustomerStatus.Active, riskScore: 38, monthlyIncome: 6200, createdAt: '2026-02-07T12:28:00', city: 'Piura' },
  { id: 'CUS-1008', documentNumber: '20601477882', fullName: 'Altiplano Foods SAC', email: 'admin@altiplanofoods.pe', phone: '+51 999 731 002', segment: 'Business', status: CustomerStatus.Pending, riskScore: 61, monthlyIncome: 54000, createdAt: '2026-06-05T15:12:00', city: 'Puno' }
];

export const ACCOUNTS_MOCK: Account[] = [
  { id: 'ACC-7001', accountNumber: '001-221-984221', customerId: 'CUS-1001', customerName: 'Andrea Salazar', type: AccountType.Savings, currency: CurrencyCode.PEN, balance: 48250.9, availableBalance: 47810.9, status: AccountStatus.Active, openedAt: '2025-09-10', branch: 'Lima Centro' },
  { id: 'ACC-7002', accountNumber: '001-225-104777', customerId: 'CUS-1002', customerName: 'Inversiones Qori SAC', type: AccountType.Checking, currency: CurrencyCode.USD, balance: 318900.12, availableBalance: 306100.12, status: AccountStatus.Active, openedAt: '2024-11-18', branch: 'Arequipa Empresas' },
  { id: 'ACC-7003', accountNumber: '001-119-452300', customerId: 'CUS-1003', customerName: 'Carlos Benites', type: AccountType.Savings, currency: CurrencyCode.PEN, balance: 2400, availableBalance: 2400, status: AccountStatus.Pending, openedAt: '2026-06-01', branch: 'Trujillo' },
  { id: 'ACC-7004', accountNumber: '002-930-321882', customerId: 'CUS-1004', customerName: 'Blue Andes Logistics', type: AccountType.Credit, currency: CurrencyCode.USD, balance: 80400, availableBalance: 20500, status: AccountStatus.Blocked, openedAt: '2025-03-23', branch: 'Lima Empresas' },
  { id: 'ACC-7005', accountNumber: '001-224-551000', customerId: 'CUS-1006', customerName: 'Nova Retail Group', type: AccountType.Investment, currency: CurrencyCode.PEN, balance: 980500.5, availableBalance: 980500.5, status: AccountStatus.Active, openedAt: '2025-12-09', branch: 'Lima Premium' },
  { id: 'ACC-7006', accountNumber: '001-785-110932', customerId: 'CUS-1007', customerName: 'Raúl Herrera', type: AccountType.Checking, currency: CurrencyCode.PEN, balance: 15600.75, availableBalance: 15120.75, status: AccountStatus.Active, openedAt: '2026-02-12', branch: 'Piura' },
  { id: 'ACC-7007', accountNumber: '003-400-778100', customerId: 'CUS-1008', customerName: 'Altiplano Foods SAC', type: AccountType.Checking, currency: CurrencyCode.USD, balance: 45000, availableBalance: 45000, status: AccountStatus.Pending, openedAt: '2026-06-06', branch: 'Puno' }
];

export const TRANSACTIONS_MOCK: Transaction[] = [
  { id: 'TRX-9001', operationCode: 'OP-20260614-001', accountNumber: '001-221-984221', customerName: 'Andrea Salazar', type: TransactionType.Transfer, status: TransactionStatus.Completed, currency: CurrencyCode.PEN, amount: 1200, fee: 3.5, channel: 'Mobile', createdAt: '2026-06-14T09:40:00', description: 'Transfer to supplier account' },
  { id: 'TRX-9002', operationCode: 'OP-20260614-002', accountNumber: '001-225-104777', customerName: 'Inversiones Qori SAC', type: TransactionType.Deposit, status: TransactionStatus.Completed, currency: CurrencyCode.USD, amount: 25000, fee: 0, channel: 'Branch', createdAt: '2026-06-14T10:03:00', description: 'Corporate treasury deposit' },
  { id: 'TRX-9003', operationCode: 'OP-20260613-009', accountNumber: '002-930-321882', customerName: 'Blue Andes Logistics', type: TransactionType.Payment, status: TransactionStatus.Pending, currency: CurrencyCode.USD, amount: 8500, fee: 8.5, channel: 'Web', createdAt: '2026-06-13T17:10:00', description: 'International provider payment' },
  { id: 'TRX-9004', operationCode: 'OP-20260613-010', accountNumber: '001-119-452300', customerName: 'Carlos Benites', type: TransactionType.Withdrawal, status: TransactionStatus.Failed, currency: CurrencyCode.PEN, amount: 780, fee: 0, channel: 'ATM', createdAt: '2026-06-13T18:25:00', description: 'ATM withdrawal attempt' },
  { id: 'TRX-9005', operationCode: 'OP-20260612-024', accountNumber: '001-224-551000', customerName: 'Nova Retail Group', type: TransactionType.Deposit, status: TransactionStatus.Completed, currency: CurrencyCode.PEN, amount: 154000, fee: 0, channel: 'Web', createdAt: '2026-06-12T11:42:00', description: 'Investment account funding' },
  { id: 'TRX-9006', operationCode: 'OP-20260612-025', accountNumber: '001-785-110932', customerName: 'Raúl Herrera', type: TransactionType.Transfer, status: TransactionStatus.Reversed, currency: CurrencyCode.PEN, amount: 320, fee: 1.2, channel: 'Mobile', createdAt: '2026-06-12T16:18:00', description: 'Reversed transfer due duplicated request' },
  { id: 'TRX-9007', operationCode: 'OP-20260611-015', accountNumber: '003-400-778100', customerName: 'Altiplano Foods SAC', type: TransactionType.Payment, status: TransactionStatus.Pending, currency: CurrencyCode.USD, amount: 14300, fee: 12, channel: 'Web', createdAt: '2026-06-11T13:08:00', description: 'Pending compliance payment review' },
  { id: 'TRX-9008', operationCode: 'OP-20260610-077', accountNumber: '001-221-984221', customerName: 'Andrea Salazar', type: TransactionType.Deposit, status: TransactionStatus.Completed, currency: CurrencyCode.PEN, amount: 4100, fee: 0, channel: 'Branch', createdAt: '2026-06-10T12:10:00', description: 'Payroll income deposit' }
];

export const REQUESTS_MOCK: InternalRequest[] = [
  { id: 'REQ-5001', code: 'SR-2026-1101', type: RequestType.CreditEvaluation, customerName: 'Andrea Salazar', owner: 'Paola Ruiz', priority: 'High', status: RequestStatus.Pending, createdAt: '2026-06-14T08:40:00', slaHours: 8, summary: 'Credit line evaluation for premium customer.' },
  { id: 'REQ-5002', code: 'SR-2026-1102', type: RequestType.ComplianceReview, customerName: 'Altiplano Foods SAC', owner: 'Marco Vidal', priority: 'High', status: RequestStatus.Pending, createdAt: '2026-06-13T17:12:00', slaHours: 12, summary: 'Compliance review for USD payment over threshold.' },
  { id: 'REQ-5003', code: 'SR-2026-1094', type: RequestType.AccountOpening, customerName: 'Carlos Benites', owner: 'Diana Pérez', priority: 'Medium', status: RequestStatus.Approved, createdAt: '2026-06-12T10:15:00', slaHours: 24, summary: 'Savings account opening approved after KYC validation.' },
  { id: 'REQ-5004', code: 'SR-2026-1088', type: RequestType.LimitIncrease, customerName: 'Blue Andes Logistics', owner: 'Renato Flores', priority: 'Low', status: RequestStatus.Rejected, createdAt: '2026-06-09T15:20:00', slaHours: 48, summary: 'Limit increase rejected due blocked account status.' }
];

export const USERS_MOCK: InternalUser[] = [
  { id: 'USR-001', fullName: 'Víctor Díaz', email: 'victor.diaz@fincore.pe', role: UserRole.Admin, status: UserStatus.Active, department: 'Digital Banking', lastAccess: '2026-06-14T11:48:00' },
  { id: 'USR-002', fullName: 'Mariana Torres', email: 'mariana.torres@fincore.pe', role: UserRole.Manager, status: UserStatus.Active, department: 'Risk Management', lastAccess: '2026-06-14T08:10:00' },
  { id: 'USR-003', fullName: 'Paola Ruiz', email: 'paola.ruiz@fincore.pe', role: UserRole.Analyst, status: UserStatus.Active, department: 'Credit Operations', lastAccess: '2026-06-13T19:02:00' },
  { id: 'USR-004', fullName: 'Marco Vidal', email: 'marco.vidal@fincore.pe', role: UserRole.Analyst, status: UserStatus.Locked, department: 'Compliance', lastAccess: '2026-06-10T10:21:00' },
  { id: 'USR-005', fullName: 'Diana Pérez', email: 'diana.perez@fincore.pe', role: UserRole.Manager, status: UserStatus.Inactive, department: 'Customer Success', lastAccess: '2026-05-30T17:30:00' }
];

export const KPI_MOCK: KpiCard[] = [
  { title: 'Total Assets', value: 'S/ 4.8M', subtitle: 'Available balance across products', icon: 'pi pi-wallet', trend: KpiTrend.Up, trendValue: '+12.8%' },
  { title: 'Active Customers', value: '18,420', subtitle: 'Retail and corporate portfolio', icon: 'pi pi-users', trend: KpiTrend.Up, trendValue: '+6.1%' },
  { title: 'Pending Requests', value: '26', subtitle: 'Internal workflow queue', icon: 'pi pi-inbox', trend: KpiTrend.Down, trendValue: '-9.4%' },
  { title: 'Monthly Revenue', value: 'S/ 812K', subtitle: 'Fees, commissions and income', icon: 'pi pi-chart-bar', trend: KpiTrend.Up, trendValue: '+4.7%' }
];

export const REPORT_ROWS_MOCK: ReportRow[] = [
  { id: 'REP-1', metric: 'Net fee income', category: 'Revenue', period: 'Jun 2026', amount: 812300, variation: 4.7, owner: 'Finance' },
  { id: 'REP-2', metric: 'Rejected operations', category: 'Risk', period: 'Jun 2026', amount: 72, variation: -8.2, owner: 'Risk' },
  { id: 'REP-3', metric: 'New customers', category: 'Growth', period: 'Jun 2026', amount: 384, variation: 12.5, owner: 'Customer Success' },
  { id: 'REP-4', metric: 'Digital transactions', category: 'Operations', period: 'Jun 2026', amount: 12840, variation: 16.2, owner: 'Digital Banking' },
  { id: 'REP-5', metric: 'Compliance alerts', category: 'Compliance', period: 'Jun 2026', amount: 31, variation: -3.1, owner: 'Compliance' }
];

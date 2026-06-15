import { KpiTrend } from './enums';

export interface KpiCard {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  trend: KpiTrend;
  trendValue: string;
}

export interface ReportRow {
  id: string;
  metric: string;
  category: string;
  period: string;
  amount: number;
  variation: number;
  owner: string;
}

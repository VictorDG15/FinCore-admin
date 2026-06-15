import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { KpiCard, ReportRow } from '../models/kpi.model';
import { KPI_MOCK, REPORT_ROWS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class ReportService {
  getKpis(): Observable<KpiCard[]> {
    return of([...KPI_MOCK]).pipe(delay(250));
  }

  getReportRows(): Observable<ReportRow[]> {
    return of([...REPORT_ROWS_MOCK]).pipe(delay(350));
  }

  getCashFlowChart(): { labels: string[]; datasets: { label: string; data: number[]; tension: number; fill: boolean }[] } {
    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        { label: 'Income', data: [620, 690, 735, 702, 780, 812], tension: .42, fill: true },
        { label: 'Expenses', data: [410, 438, 460, 455, 490, 501], tension: .42, fill: true }
      ]
    };
  }

  getPortfolioChart(): { labels: string[]; datasets: { data: number[] }[] } {
    return {
      labels: ['Savings', 'Checking', 'Credit', 'Investment'],
      datasets: [{ data: [34, 27, 18, 21] }]
    };
  }
}

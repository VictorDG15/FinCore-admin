import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { KpiCard } from '../../../../core/models/kpi.model';
import { Transaction } from '../../../../core/models/transaction.model';
import { ReportService } from '../../../../core/services/report.service';
import { TransactionService } from '../../../../core/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = true;
  kpis: KpiCard[] = [];
  lastTransactions: Transaction[] = [];
  cashFlowData = this.reportService.getCashFlowChart();
  portfolioData = this.reportService.getPortfolioChart();
  readonly chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { usePointStyle: true } }
    },
    scales: {
      y: { beginAtZero: true, grid: { color: '#edf2f7' } },
      x: { grid: { display: false } }
    }
  };

  constructor(
    private readonly reportService: ReportService,
    private readonly transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    forkJoin({
      kpis: this.reportService.getKpis(),
      transactions: this.transactionService.getTransactions()
    }).subscribe(({ kpis, transactions }) => {
      this.kpis = kpis;
      this.lastTransactions = transactions.slice(0, 5);
      this.loading = false;
    });
  }
}

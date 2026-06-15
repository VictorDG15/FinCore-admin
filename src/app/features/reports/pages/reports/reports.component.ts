import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { KpiCard, ReportRow } from '../../../../core/models/kpi.model';
import { ReportService } from '../../../../core/services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  loading = true;
  reportRows: ReportRow[] = [];
  kpis: KpiCard[] = [];
  chartData = this.reportService.getCashFlowChart();
  readonly filterForm = this.fb.group({
    fromDate: [new Date('2026-06-01')],
    toDate: [new Date('2026-06-30')],
    category: ['All']
  });
  readonly categories = ['All', 'Revenue', 'Risk', 'Growth', 'Operations', 'Compliance'].map((value) => ({ label: value, value }));

  constructor(private readonly fb: FormBuilder, private readonly reportService: ReportService) {}

  ngOnInit(): void {
    forkJoin({ rows: this.reportService.getReportRows(), kpis: this.reportService.getKpis() }).subscribe(({ rows, kpis }) => {
      this.reportRows = rows;
      this.kpis = kpis.slice(0, 3);
      this.loading = false;
    });
  }

  get filteredRows(): ReportRow[] {
    const category = this.filterForm.getRawValue().category;
    return category === 'All' ? this.reportRows : this.reportRows.filter((row) => row.category === category);
  }
}

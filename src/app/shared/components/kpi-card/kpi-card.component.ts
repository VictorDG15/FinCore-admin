import { Component, Input } from '@angular/core';
import { KpiCard } from '../../../core/models/kpi.model';
import { KpiTrend } from '../../../core/models/enums';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input({ required: true }) data!: KpiCard;

  get trendIcon(): string {
    if (this.data.trend === KpiTrend.Down) {
      return 'pi pi-arrow-down-right';
    }

    if (this.data.trend === KpiTrend.Neutral) {
      return 'pi pi-minus';
    }

    return 'pi pi-arrow-up-right';
  }

  get trendClass(): string {
    return this.data.trend === KpiTrend.Down ? 'down' : 'up';
  }
}

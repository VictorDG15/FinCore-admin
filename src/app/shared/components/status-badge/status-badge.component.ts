import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html'
})
export class StatusBadgeComponent {
  @Input({ required: true }) value = '';

  get severity(): 'success' | 'info' | 'warning' | 'danger' | 'secondary' | 'contrast' | undefined {
    const normalized = this.value.toLowerCase();

    if (['active', 'approved', 'completed'].includes(normalized)) {
      return 'success';
    }

    if (['pending', 'review'].includes(normalized)) {
      return 'warning';
    }

    if (['blocked', 'failed', 'rejected', 'locked'].includes(normalized)) {
      return 'danger';
    }

    if (['inactive', 'reversed'].includes(normalized)) {
      return 'secondary';
    }

    return 'info';
  }

  get label(): string {
    return this.value.replace(/_/g, ' ');
  }
}

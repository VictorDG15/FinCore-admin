import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() title = 'No records found';
  @Input() description = 'Try changing your filters or creating a new record.';
  @Input() imageUrl = 'assets/illustrations/empty-state.svg';
}

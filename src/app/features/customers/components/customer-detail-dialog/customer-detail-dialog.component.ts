import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../../../core/models/customer.model';

@Component({
  selector: 'app-customer-detail-dialog',
  templateUrl: './customer-detail-dialog.component.html',
  styleUrls: ['./customer-detail-dialog.component.scss']
})
export class CustomerDetailDialogComponent {
  @Input() visible = false;
  @Input() customer: Customer | null = null;
  @Output() closed = new EventEmitter<void>();
}

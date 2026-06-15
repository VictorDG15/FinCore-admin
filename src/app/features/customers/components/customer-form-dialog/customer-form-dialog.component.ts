import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { Customer, CustomerPayload } from '../../../../core/models/customer.model';
import { CustomerStatus } from '../../../../core/models/enums';
import { CustomerService } from '../../../../core/services/customer.service';
import { SelectOption, toSelectOptions } from '../../../../shared/utils/select-options';

@Component({
  selector: 'app-customer-form-dialog',
  templateUrl: './customer-form-dialog.component.html'
})
export class CustomerFormDialogComponent implements OnChanges {
  @Input() visible = false;
  @Input() customer: Customer | null = null;
  @Output() closed = new EventEmitter<void>();
  @Output() saved = new EventEmitter<Customer>();

  loading = false;
  readonly statusOptions: SelectOption<CustomerStatus>[] = toSelectOptions(Object.values(CustomerStatus));
  readonly segmentOptions = ['Premium', 'Business', 'Retail', 'Corporate'].map((value) => ({ label: value, value }));
  readonly form = this.fb.group({
    documentNumber: ['', Validators.required],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    segment: ['Retail', Validators.required],
    status: [CustomerStatus.Active, Validators.required],
    monthlyIncome: [0, [Validators.required, Validators.min(1)]],
    city: ['', Validators.required]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly customerService: CustomerService,
    private readonly messageService: MessageService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customer'] || changes['visible']) {
      this.patchForm();
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const payload = this.form.getRawValue() as CustomerPayload;
    this.customerService.saveCustomer(payload, this.customer?.id)
      .pipe(finalize(() => this.loading = false))
      .subscribe((customer) => {
        this.messageService.add({ severity: 'success', summary: 'Customer saved', detail: `${customer.fullName} was updated successfully.` });
        this.saved.emit(customer);
        this.closed.emit();
      });
  }

  private patchForm(): void {
    if (this.customer) {
      this.form.patchValue({
        documentNumber: this.customer.documentNumber,
        fullName: this.customer.fullName,
        email: this.customer.email,
        phone: this.customer.phone,
        segment: this.customer.segment,
        status: this.customer.status,
        monthlyIncome: this.customer.monthlyIncome,
        city: this.customer.city
      });
      return;
    }

    this.form.reset({
      documentNumber: '',
      fullName: '',
      email: '',
      phone: '',
      segment: 'Retail',
      status: CustomerStatus.Active,
      monthlyIncome: 0,
      city: ''
    });
  }
}

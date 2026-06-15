import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { TransactionStatus, TransactionType } from '../../../../core/models/enums';
import { Transaction } from '../../../../core/models/transaction.model';
import { TransactionService } from '../../../../core/services/transaction.service';
import { SelectOption, toSelectOptions } from '../../../../shared/utils/select-options';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  loading = true;
  transactions: Transaction[] = [];
  selectedTransaction: Transaction | null = null;
  detailVisible = false;
  readonly statusOptions: SelectOption<TransactionStatus>[] = toSelectOptions(Object.values(TransactionStatus));
  readonly typeOptions: SelectOption<TransactionType>[] = toSelectOptions(Object.values(TransactionType));
  readonly filters = this.fb.group({
    fromDate: [null as Date | null],
    toDate: [null as Date | null],
    status: [null as TransactionStatus | null],
    type: [null as TransactionType | null],
    minAmount: [null as number | null],
    maxAmount: [null as number | null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly transactionService: TransactionService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.loading = true;
    this.transactionService.getTransactions(this.filters.getRawValue())
      .pipe(finalize(() => this.loading = false))
      .subscribe((transactions) => this.transactions = transactions);
  }

  clearFilters(): void {
    this.filters.reset({ fromDate: null, toDate: null, status: null, type: null, minAmount: null, maxAmount: null });
    this.loadTransactions();
  }

  exportTransactions(): void {
    this.messageService.add({ severity: 'success', summary: 'Export generated', detail: 'CSV export simulated successfully.' });
  }

  viewTransaction(transaction: Transaction): void {
    this.selectedTransaction = transaction;
    this.detailVisible = true;
  }
}

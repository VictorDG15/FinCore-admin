import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import { Transaction, TransactionFilters } from '../models/transaction.model';
import { TRANSACTIONS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  getTransactions(filters?: TransactionFilters): Observable<Transaction[]> {
    return of([...TRANSACTIONS_MOCK]).pipe(
      delay(400),
      map((transactions) => this.applyFilters(transactions, filters))
    );
  }

  private applyFilters(transactions: Transaction[], filters?: TransactionFilters): Transaction[] {
    if (!filters) {
      return transactions;
    }

    return transactions.filter((transaction) => {
      const date = new Date(transaction.createdAt);
      const fromDate = filters.fromDate ? new Date(filters.fromDate) : null;
      const toDate = filters.toDate ? new Date(filters.toDate) : null;

      return (!fromDate || date >= fromDate)
        && (!toDate || date <= toDate)
        && (!filters.status || transaction.status === filters.status)
        && (!filters.type || transaction.type === filters.type)
        && (!filters.minAmount || transaction.amount >= filters.minAmount)
        && (!filters.maxAmount || transaction.amount <= filters.maxAmount);
    });
  }
}

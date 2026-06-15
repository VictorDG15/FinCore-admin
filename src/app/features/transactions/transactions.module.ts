import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionListComponent } from './pages/transaction-list/transaction-list.component';

@NgModule({ declarations: [TransactionListComponent], imports: [SharedModule, TransactionsRoutingModule] })
export class TransactionsModule {}

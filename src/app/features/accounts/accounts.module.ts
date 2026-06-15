import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountListComponent } from './pages/account-list/account-list.component';

@NgModule({ declarations: [AccountListComponent], imports: [SharedModule, AccountsRoutingModule] })
export class AccountsModule {}

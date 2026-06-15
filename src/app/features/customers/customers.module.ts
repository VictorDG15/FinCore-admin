import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CustomerDetailDialogComponent } from './components/customer-detail-dialog/customer-detail-dialog.component';
import { CustomerFormDialogComponent } from './components/customer-form-dialog/customer-form-dialog.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerFormDialogComponent, CustomerDetailDialogComponent],
  imports: [SharedModule, CustomersRoutingModule]
})
export class CustomersModule {}

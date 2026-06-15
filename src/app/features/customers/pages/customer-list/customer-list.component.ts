import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../core/models/customer.model';
import { CustomerService } from '../../../../core/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  loading = true;
  customers: Customer[] = [];
  searchTerm = '';
  formVisible = false;
  detailVisible = false;
  selectedCustomer: Customer | null = null;

  constructor(private readonly customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers) => {
      this.customers = customers;
      this.loading = false;
    });
  }

  get filteredCustomers(): Customer[] {
    if (!this.searchTerm) {
      return this.customers;
    }

    return this.customers.filter((customer) =>
      [customer.fullName, customer.email, customer.documentNumber, customer.segment, customer.city]
        .join(' ')
        .toLowerCase()
        .includes(this.searchTerm)
    );
  }

  createCustomer(): void {
    this.selectedCustomer = null;
    this.formVisible = true;
  }

  editCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
    this.formVisible = true;
  }

  viewCustomer(customer: Customer): void {
    this.selectedCustomer = customer;
    this.detailVisible = true;
  }

  closeForm(): void {
    this.formVisible = false;
    this.selectedCustomer = null;
  }
}

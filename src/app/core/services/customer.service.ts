import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map } from 'rxjs';
import { Customer, CustomerPayload } from '../models/customer.model';
import { CUSTOMERS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private readonly customersSubject = new BehaviorSubject<Customer[]>([...CUSTOMERS_MOCK]);

  getCustomers(): Observable<Customer[]> {
    return this.customersSubject.asObservable().pipe(delay(350));
  }

  getCustomerById(id: string): Observable<Customer | undefined> {
    return this.getCustomers().pipe(map((customers) => customers.find((customer) => customer.id === id)));
  }

  saveCustomer(payload: CustomerPayload, id?: string): Observable<Customer> {
    const customers = this.customersSubject.value;

    if (id) {
      const updated: Customer = {
        ...customers.find((customer) => customer.id === id)!,
        ...payload,
        riskScore: payload.riskScore ?? customers.find((customer) => customer.id === id)!.riskScore
      };
      this.customersSubject.next(customers.map((customer) => customer.id === id ? updated : customer));
      return new BehaviorSubject(updated).asObservable().pipe(delay(300));
    }

    const created: Customer = {
      ...payload,
      id: `CUS-${Math.floor(1000 + Math.random() * 9000)}`,
      riskScore: payload.riskScore ?? 25,
      createdAt: new Date().toISOString()
    };
    this.customersSubject.next([created, ...customers]);
    return new BehaviorSubject(created).asObservable().pipe(delay(300));
  }
}

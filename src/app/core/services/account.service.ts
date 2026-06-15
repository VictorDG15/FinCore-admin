import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { Account } from '../models/account.model';
import { ACCOUNTS_MOCK } from './mock-data';

@Injectable({ providedIn: 'root' })
export class AccountService {
  getAccounts(): Observable<Account[]> {
    return of([...ACCOUNTS_MOCK]).pipe(delay(350));
  }
}

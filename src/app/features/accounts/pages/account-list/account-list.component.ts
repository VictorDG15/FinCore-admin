import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Account } from '../../../../core/models/account.model';
import { AccountStatus, AccountType, CurrencyCode } from '../../../../core/models/enums';
import { AccountService } from '../../../../core/services/account.service';
import { SelectOption, toSelectOptions } from '../../../../shared/utils/select-options';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  loading = true;
  accounts: Account[] = [];
  selectedAccount: Account | null = null;
  detailVisible = false;
  readonly typeOptions: SelectOption<AccountType>[] = toSelectOptions(Object.values(AccountType));
  readonly currencyOptions: SelectOption<CurrencyCode>[] = toSelectOptions(Object.values(CurrencyCode));
  readonly statusOptions: SelectOption<AccountStatus>[] = toSelectOptions(Object.values(AccountStatus));
  readonly filters = this.fb.group({
    type: [null as AccountType | null],
    currency: [null as CurrencyCode | null],
    status: [null as AccountStatus | null]
  });

  constructor(private readonly fb: FormBuilder, private readonly accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.getAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      this.loading = false;
    });
  }

  get filteredAccounts(): Account[] {
    const filters = this.filters.getRawValue();
    return this.accounts.filter((account) =>
      (!filters.type || account.type === filters.type)
      && (!filters.currency || account.currency === filters.currency)
      && (!filters.status || account.status === filters.status)
    );
  }

  viewAccount(account: Account): void {
    this.selectedAccount = account;
    this.detailVisible = true;
  }

  clearFilters(): void {
    this.filters.reset({ type: null, currency: null, status: null });
  }
}

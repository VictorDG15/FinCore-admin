import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { GuestGuard } from './core/guards/guest.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [GuestGuard],
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule) },
      { path: 'customers', loadChildren: () => import('./features/customers/customers.module').then((m) => m.CustomersModule) },
      { path: 'accounts', loadChildren: () => import('./features/accounts/accounts.module').then((m) => m.AccountsModule) },
      { path: 'transactions', loadChildren: () => import('./features/transactions/transactions.module').then((m) => m.TransactionsModule) },
      { path: 'requests', loadChildren: () => import('./features/requests/requests.module').then((m) => m.RequestsModule) },
      { path: 'reports', loadChildren: () => import('./features/reports/reports.module').then((m) => m.ReportsModule) },
      { path: 'users', loadChildren: () => import('./features/users/users.module').then((m) => m.UsersModule) },
      { path: 'settings', loadChildren: () => import('./features/settings/settings.module').then((m) => m.SettingsModule) }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

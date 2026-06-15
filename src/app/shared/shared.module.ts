import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';
import { ProgressBarModule } from 'primeng/progressbar';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TimelineModule } from 'primeng/timeline';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

import { AutofocusDirective } from './directives/autofocus.directive';
import { CurrencyShortPipe } from './pipes/currency-short.pipe';
import { InitialsPipe } from './pipes/initials.pipe';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DataTableWrapperComponent } from './components/data-table-wrapper/data-table-wrapper.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { KpiCardComponent } from './components/kpi-card/kpi-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { StatusBadgeComponent } from './components/status-badge/status-badge.component';

const PRIME_MODULES = [
  BadgeModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  ChartModule,
  CheckboxModule,
  ConfirmDialogModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  InputNumberModule,
  InputSwitchModule,
  InputTextModule,
  InputTextareaModule,
  MenuModule,
  PasswordModule,
  ProgressBarModule,
  RippleModule,
  SkeletonModule,
  TableModule,
  TagModule,
  TimelineModule,
  ToolbarModule,
  TooltipModule
];

const SHARED_DECLARATIONS = [
  AutofocusDirective,
  CurrencyShortPipe,
  InitialsPipe,
  ConfirmDialogComponent,
  DataTableWrapperComponent,
  EmptyStateComponent,
  FormFieldErrorComponent,
  KpiCardComponent,
  LoadingComponent,
  PageHeaderComponent,
  SearchBoxComponent,
  StatusBadgeComponent
];

@NgModule({
  declarations: [...SHARED_DECLARATIONS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ...PRIME_MODULES],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ...PRIME_MODULES, ...SHARED_DECLARATIONS],
  providers: [CurrencyPipe, DatePipe, TitleCasePipe]
})
export class SharedModule {}

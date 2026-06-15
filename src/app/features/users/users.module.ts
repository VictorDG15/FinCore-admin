import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({ declarations: [UserListComponent, UserFormDialogComponent], imports: [SharedModule, UsersRoutingModule] })
export class UsersModule {}

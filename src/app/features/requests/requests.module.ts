import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestListComponent } from './pages/request-list/request-list.component';

@NgModule({ declarations: [RequestListComponent], imports: [SharedModule, RequestsRoutingModule] })
export class RequestsModule {}

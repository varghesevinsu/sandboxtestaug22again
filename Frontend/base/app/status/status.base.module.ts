import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { StatusDetailComponent } from '@app/status/status/status-detail/status-detail.component';
import { StatusListComponent } from '@app/status/status/status-list/status-list.component';

@NgModule({
  declarations: [
StatusDetailComponent,
StatusListComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
StatusDetailComponent,
StatusListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class StatusBaseModule { }
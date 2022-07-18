import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { DelegationListComponent } from '@app/delegation/delegation/delegation-list/delegation-list.component';
import { DelegationDetailComponent } from '@app/delegation/delegation/delegation-detail/delegation-detail.component';

@NgModule({
  declarations: [
DelegationListComponent,
DelegationDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
DelegationListComponent,
DelegationDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class DelegationBaseModule { }
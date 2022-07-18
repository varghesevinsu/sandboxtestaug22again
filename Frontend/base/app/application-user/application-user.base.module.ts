import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ApplicationUserDetailComponent } from '@app/application-user/application-user/application-user-detail/application-user-detail.component';
import { ApplicationUserListComponent } from '@app/application-user/application-user/application-user-list/application-user-list.component';

@NgModule({
  declarations: [
ApplicationUserDetailComponent,
ApplicationUserListComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ApplicationUserDetailComponent,
ApplicationUserListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ApplicationUserBaseModule { }
import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { UserGuideListComponent } from '@app/user-guide/user-guide/user-guide-list/user-guide-list.component';
import { UserGuideDetailComponent } from '@app/user-guide/user-guide/user-guide-detail/user-guide-detail.component';

@NgModule({
  declarations: [
UserGuideListComponent,
UserGuideDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
UserGuideListComponent,
UserGuideDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class UserGuideBaseModule { }
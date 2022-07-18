import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ServicesListComponent } from '@app/services/services/services-list/services-list.component';
import { ServicesDetailComponent } from '@app/services/services/services-detail/services-detail.component';

@NgModule({
  declarations: [
ServicesListComponent,
ServicesDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ServicesListComponent,
ServicesDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ServicesBaseModule { }
import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ManpowerListComponent } from '@app/manpower/manpower/manpower-list/manpower-list.component';
import { ManpowerDetailComponent } from '@app/manpower/manpower/manpower-detail/manpower-detail.component';

@NgModule({
  declarations: [
ManpowerListComponent,
ManpowerDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ManpowerListComponent,
ManpowerDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ManpowerBaseModule { }
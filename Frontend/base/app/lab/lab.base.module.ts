import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { LabDetailComponent } from '@app/lab/lab/lab-detail/lab-detail.component';
import { LabListComponent } from '@app/lab/lab/lab-list/lab-list.component';

@NgModule({
  declarations: [
LabDetailComponent,
LabListComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
LabDetailComponent,
LabListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class LabBaseModule { }
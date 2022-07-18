import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ProjectTypeListComponent } from '@app/project-type/project-type/project-type-list/project-type-list.component';
import { ProjectTypeDetailComponent } from '@app/project-type/project-type/project-type-detail/project-type-detail.component';

@NgModule({
  declarations: [
ProjectTypeListComponent,
ProjectTypeDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ProjectTypeListComponent,
ProjectTypeDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ProjectTypeBaseModule { }
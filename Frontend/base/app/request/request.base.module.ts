import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ServicesModule } from '@app/services/services.module';
import { ManpowerModule } from '@app/manpower/manpower.module';
import { ToolModule } from '@app/tool/tool.module';
import { LabModule } from '@app/lab/lab.module';
import { PlaceOfDevModule } from '@app/place-of-dev/place-of-dev.module';
import { ProjectTypeModule } from '@app/project-type/project-type.module';
import { ToolDesignTypeModule } from '@app/tool-design-type/tool-design-type.module';
import { UserGuideModule } from '@app/user-guide/user-guide.module';
import { HistoryModule } from '@app/history/history.module';
import { StatusModule } from '@app/status/status.module';
import { RequestListComponent } from '@app/request/request/request-list/request-list.component';
import { RequestDetailComponent } from '@app/request/request/request-detail/request-detail.component';

@NgModule({
  declarations: [
RequestListComponent,
RequestDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule,
ServicesModule,
ManpowerModule,
ToolModule,
LabModule,
PlaceOfDevModule,
ProjectTypeModule,
ToolDesignTypeModule,
UserGuideModule,
HistoryModule,
StatusModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ServicesModule,
ManpowerModule,
ToolModule,
LabModule,
PlaceOfDevModule,
ProjectTypeModule,
ToolDesignTypeModule,
UserGuideModule,
HistoryModule,
StatusModule,
RequestListComponent,
RequestDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class RequestBaseModule { }
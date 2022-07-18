import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ToolDetailComponent } from '@app/tool/tool/tool-detail/tool-detail.component';
import { ToolListComponent } from '@app/tool/tool/tool-list/tool-list.component';

@NgModule({
  declarations: [
ToolDetailComponent,
ToolListComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ToolDetailComponent,
ToolListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ToolBaseModule { }
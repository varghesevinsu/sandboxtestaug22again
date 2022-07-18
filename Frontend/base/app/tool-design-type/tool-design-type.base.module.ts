import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { ToolDesignTypeDetailComponent } from '@app/tool-design-type/tool-design-type/tool-design-type-detail/tool-design-type-detail.component';
import { ToolDesignTypeListComponent } from '@app/tool-design-type/tool-design-type/tool-design-type-list/tool-design-type-list.component';

@NgModule({
  declarations: [
ToolDesignTypeDetailComponent,
ToolDesignTypeListComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
ToolDesignTypeDetailComponent,
ToolDesignTypeListComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class ToolDesignTypeBaseModule { }
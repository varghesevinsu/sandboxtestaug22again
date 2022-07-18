import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { ToolDesignTypeDetailComponent } from '@app/tool-design-type/tool-design-type/tool-design-type-detail/tool-design-type-detail.component';
import { ToolDesignTypeListComponent } from '@app/tool-design-type/tool-design-type/tool-design-type-list/tool-design-type-list.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'tooldesigntypedetail',
     pathMatch: 'full'
 },
{
     path: 'tooldesigntypedetail',
     component: ToolDesignTypeDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TOOL_DESIGN_TYPE_DETAIL",
        breadcrumb: "TOOL_DESIGN_TYPE_DETAIL",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'tooldesigntypelist',
     component: ToolDesignTypeListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TOOL_DESIGN_TYPE_LIST",
        breadcrumb: "TOOL_DESIGN_TYPE_LIST",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ToolDesignTypeBaseRoutingModule
{
}
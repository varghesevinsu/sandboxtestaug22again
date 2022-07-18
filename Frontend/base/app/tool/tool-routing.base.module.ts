import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { ToolDetailComponent } from '@app/tool/tool/tool-detail/tool-detail.component';
import { ToolListComponent } from '@app/tool/tool/tool-list/tool-list.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'tooldetail',
     pathMatch: 'full'
 },
{
     path: 'tooldetail',
     component: ToolDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TOOL_DETAIL",
        breadcrumb: "TOOL_DETAIL",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'toollist',
     component: ToolListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "TOOL_LIST",
        breadcrumb: "TOOL_LIST",
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
export class ToolBaseRoutingModule
{
}
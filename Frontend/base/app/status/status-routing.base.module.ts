import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { StatusDetailComponent } from '@app/status/status/status-detail/status-detail.component';
import { StatusListComponent } from '@app/status/status/status-list/status-list.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'statusdetail',
     pathMatch: 'full'
 },
{
     path: 'statusdetail',
     component: StatusDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "STATUS_DETAIL",
        breadcrumb: "STATUS_DETAIL",
        roles : [
        			"Development Administrator"
				]
     }
},
{
     path: 'statuslist',
     component: StatusListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "STATUS_LIST",
        breadcrumb: "STATUS_LIST",
        roles : [
        			"Development Administrator"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class StatusBaseRoutingModule
{
}
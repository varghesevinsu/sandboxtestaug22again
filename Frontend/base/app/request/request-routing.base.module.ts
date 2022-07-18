import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { RequestListComponent } from '@app/request/request/request-list/request-list.component';
import { RequestDetailComponent } from '@app/request/request/request-detail/request-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'requestlist',
     pathMatch: 'full'
 },
{
     path: 'requestlist',
     component: RequestListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "REQUEST_LIST",
        breadcrumb: "REQUEST_LIST",
        roles : [
        			"all"
				]
     }
},
{
     path: 'requestdetail',
     component: RequestDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "REQUEST_DETAIL",
        breadcrumb: "REQUEST_DETAIL",
        roles : [
        			"all"
				]
     }
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RequestBaseRoutingModule
{
}
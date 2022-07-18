import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { DelegationListComponent } from '@app/delegation/delegation/delegation-list/delegation-list.component';
import { DelegationDetailComponent } from '@app/delegation/delegation/delegation-detail/delegation-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'delegationlist',
     pathMatch: 'full'
 },
{
     path: 'delegationlist',
     component: DelegationListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "DELEGATION_LIST",
        breadcrumb: "DELEGATION_LIST",
        roles : [
        			"all"
				]
     }
},
{
     path: 'delegationdetail',
     component: DelegationDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "DELEGATION_DETAIL",
        breadcrumb: "DELEGATION_DETAIL",
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
export class DelegationBaseRoutingModule
{
}
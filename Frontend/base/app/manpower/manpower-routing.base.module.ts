import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { ManpowerListComponent } from '@app/manpower/manpower/manpower-list/manpower-list.component';
import { ManpowerDetailComponent } from '@app/manpower/manpower/manpower-detail/manpower-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'manpowerlist',
     pathMatch: 'full'
 },
{
     path: 'manpowerlist',
     component: ManpowerListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "MANPOWER_LIST",
        breadcrumb: "MANPOWER_LIST",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'manpowerdetail',
     component: ManpowerDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "MANPOWER_DETAIL",
        breadcrumb: "MANPOWER_DETAIL",
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
export class ManpowerBaseRoutingModule
{
}
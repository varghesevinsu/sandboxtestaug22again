import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { UserGuideListComponent } from '@app/user-guide/user-guide/user-guide-list/user-guide-list.component';
import { UserGuideDetailComponent } from '@app/user-guide/user-guide/user-guide-detail/user-guide-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'userguidelist',
     pathMatch: 'full'
 },
{
     path: 'userguidelist',
     component: UserGuideListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "USER_GUIDE_LIST",
        breadcrumb: "USER_GUIDE_LIST",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'userguidedetail',
     component: UserGuideDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "USER_GUIDE_DETAIL",
        breadcrumb: "USER_GUIDE_DETAIL",
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
export class UserGuideBaseRoutingModule
{
}
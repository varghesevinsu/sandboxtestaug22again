import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { LabDetailComponent } from '@app/lab/lab/lab-detail/lab-detail.component';
import { LabListComponent } from '@app/lab/lab/lab-list/lab-list.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'labdetail',
     pathMatch: 'full'
 },
{
     path: 'labdetail',
     component: LabDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "LAB_DETAIL",
        breadcrumb: "LAB_DETAIL",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'lablist',
     component: LabListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "LAB_LIST",
        breadcrumb: "LAB_LIST",
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
export class LabBaseRoutingModule
{
}
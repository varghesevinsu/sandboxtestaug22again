import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { ProjectTypeListComponent } from '@app/project-type/project-type/project-type-list/project-type-list.component';
import { ProjectTypeDetailComponent } from '@app/project-type/project-type/project-type-detail/project-type-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'projecttypelist',
     pathMatch: 'full'
 },
{
     path: 'projecttypelist',
     component: ProjectTypeListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "PROJECT_TYPE_LIST",
        breadcrumb: "PROJECT_TYPE_LIST",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'projecttypedetail',
     component: ProjectTypeDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "PROJECT_TYPE_DETAIL",
        breadcrumb: "PROJECT_TYPE_DETAIL",
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
export class ProjectTypeBaseRoutingModule
{
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { ServicesListComponent } from '@app/services/services/services-list/services-list.component';
import { ServicesDetailComponent } from '@app/services/services/services-detail/services-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'serviceslist',
     pathMatch: 'full'
 },
{
     path: 'serviceslist',
     component: ServicesListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "SERVICES_LIST",
        breadcrumb: "SERVICES_LIST",
        roles : [
        			"all"
				]
     }
},
{
     path: 'servicesdetail',
     component: ServicesDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "SERVICES_DETAIL",
        breadcrumb: "SERVICES_DETAIL",
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
export class ServicesBaseRoutingModule
{
}
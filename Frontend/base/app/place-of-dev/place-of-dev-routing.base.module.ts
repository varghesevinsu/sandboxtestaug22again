import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { PlaceOfDevListComponent } from '@app/place-of-dev/place-of-dev/place-of-dev-list/place-of-dev-list.component';
import { PlaceOfDevDetailComponent } from '@app/place-of-dev/place-of-dev/place-of-dev-detail/place-of-dev-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'placeofdevlist',
     pathMatch: 'full'
 },
{
     path: 'placeofdevlist',
     component: PlaceOfDevListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "PLACE_OF_DEV_LIST",
        breadcrumb: "PLACE_OF_DEV_LIST",
        roles : [
        			"selected",
				
        			"Admin",
				
        			"Development Administrator"
				]
     }
},
{
     path: 'placeofdevdetail',
     component: PlaceOfDevDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "PLACE_OF_DEV_DETAIL",
        breadcrumb: "PLACE_OF_DEV_DETAIL",
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
export class PlaceOfDevBaseRoutingModule
{
}
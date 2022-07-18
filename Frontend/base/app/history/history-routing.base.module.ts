import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';

import { HistoryListComponent } from '@app/history/history/history-list/history-list.component';
import { HistoryDetailComponent } from '@app/history/history/history-detail/history-detail.component';

export const routes: Routes = [
{
     path: '',
     redirectTo: 'historylist',
     pathMatch: 'full'
 },
{
     path: 'historylist',
     component: HistoryListComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "HISTORY_LIST",
        breadcrumb: "HISTORY_LIST",
        roles : [
        			"Development Administrator"
				]
     }
},
{
     path: 'historydetail',
     component: HistoryDetailComponent,
     canDeactivate: [ CanDeactivateGuard ],
     data: {
     	label: "HISTORY_DETAIL",
        breadcrumb: "HISTORY_DETAIL",
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
export class HistoryBaseRoutingModule
{
}
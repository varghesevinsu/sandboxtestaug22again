import { NgModule } from '@angular/core';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CanDeactivateGuard } from '@baseapp/auth.can-deactivate-guard.service';
import { HistoryListComponent } from '@app/history/history/history-list/history-list.component';
import { HistoryDetailComponent } from '@app/history/history/history-detail/history-detail.component';

@NgModule({
  declarations: [
HistoryListComponent,
HistoryDetailComponent
],
imports: [
SharedBaseModule,
WidgetsBaseModule
],

exports: [
SharedBaseModule,
WidgetsBaseModule,
HistoryListComponent,
HistoryDetailComponent
],

providers: [
BsModalService,
CanDeactivateGuard
],
  
})
export class HistoryBaseModule { }
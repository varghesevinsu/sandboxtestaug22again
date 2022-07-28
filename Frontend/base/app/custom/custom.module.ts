import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsBaseModule } from '@baseapp/widgets/widgets.base.module';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { SharedBaseModule } from '@baseapp/shared/shared.base.module';
import { Scheduler } from './scheduler/scheduler.component';
import { Sdfdsf } from './sdfdsf/sdfdsf.component';
import { Leader } from './leader/leader.component';

@NgModule({
  declarations: [
  	Sdfdsf,
Leader,
Scheduler
  ],
  imports: [
    CommonModule,
    WidgetsBaseModule,
    TranslateModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    SharedBaseModule
  ],
  exports: [
	WidgetsBaseModule,
	TranslateModule,
	ConfirmDialogModule,
    MessageModule,
    MessagesModule,
   Sdfdsf,
Leader,
Scheduler 
  ],
  providers: [

  ]
})
export class CustomModule { }
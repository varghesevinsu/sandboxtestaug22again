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

@NgModule({
  declarations: [
  	Sdfdsf,
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
Scheduler 
  ],
  providers: [

  ]
})
export class CustomModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryBaseModule } from '@baseapp/history/history.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HistoryBaseModule,
    HistoryRoutingModule
    
  ],
  exports: [
      HistoryBaseModule,
  ]

})
export class HistoryModule  { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusBaseModule } from '@baseapp/status/status.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StatusBaseModule,
    StatusRoutingModule
    
  ],
  exports: [
      StatusBaseModule,
  ]

})
export class StatusModule  { }
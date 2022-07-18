import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestBaseModule } from '@baseapp/request/request.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RequestBaseModule,
    RequestRoutingModule
    
  ],
  exports: [
      RequestBaseModule,
  ]

})
export class RequestModule  { }
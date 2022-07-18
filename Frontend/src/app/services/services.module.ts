import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesBaseModule } from '@baseapp/services/services.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ServicesBaseModule,
    ServicesRoutingModule
    
  ],
  exports: [
      ServicesBaseModule,
  ]

})
export class ServicesModule  { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelegationRoutingModule } from './delegation-routing.module';
import { DelegationBaseModule } from '@baseapp/delegation/delegation.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    DelegationBaseModule,
    DelegationRoutingModule
    
  ],
  exports: [
      DelegationBaseModule,
  ]

})
export class DelegationModule  { }
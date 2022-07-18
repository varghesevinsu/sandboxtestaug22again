import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManpowerRoutingModule } from './manpower-routing.module';
import { ManpowerBaseModule } from '@baseapp/manpower/manpower.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ManpowerBaseModule,
    ManpowerRoutingModule
    
  ],
  exports: [
      ManpowerBaseModule,
  ]

})
export class ManpowerModule  { }
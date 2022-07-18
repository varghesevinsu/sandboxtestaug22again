import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabRoutingModule } from './lab-routing.module';
import { LabBaseModule } from '@baseapp/lab/lab.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LabBaseModule,
    LabRoutingModule
    
  ],
  exports: [
      LabBaseModule,
  ]

})
export class LabModule  { }
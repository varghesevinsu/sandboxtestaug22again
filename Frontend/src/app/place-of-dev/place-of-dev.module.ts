import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceOfDevRoutingModule } from './place-of-dev-routing.module';
import { PlaceOfDevBaseModule } from '@baseapp/place-of-dev/place-of-dev.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PlaceOfDevBaseModule,
    PlaceOfDevRoutingModule
    
  ],
  exports: [
      PlaceOfDevBaseModule,
  ]

})
export class PlaceOfDevModule  { }
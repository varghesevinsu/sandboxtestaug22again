import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolRoutingModule } from './tool-routing.module';
import { ToolBaseModule } from '@baseapp/tool/tool.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ToolBaseModule,
    ToolRoutingModule
    
  ],
  exports: [
      ToolBaseModule,
  ]

})
export class ToolModule  { }
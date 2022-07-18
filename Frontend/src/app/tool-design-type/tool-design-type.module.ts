import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolDesignTypeRoutingModule } from './tool-design-type-routing.module';
import { ToolDesignTypeBaseModule } from '@baseapp/tool-design-type/tool-design-type.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ToolDesignTypeBaseModule,
    ToolDesignTypeRoutingModule
    
  ],
  exports: [
      ToolDesignTypeBaseModule,
  ]

})
export class ToolDesignTypeModule  { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectTypeRoutingModule } from './project-type-routing.module';
import { ProjectTypeBaseModule } from '@baseapp/project-type/project-type.base.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProjectTypeBaseModule,
    ProjectTypeRoutingModule
    
  ],
  exports: [
      ProjectTypeBaseModule,
  ]

})
export class ProjectTypeModule  { }